import { useState, FormEvent } from 'react'
import styles from './styles.module.scss';
import Head from 'next/head';
import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock, FiStar } from 'react-icons/fi'
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import firebase from '../../services/firebaseConnection';
import Link from 'next/link';

import { format } from 'date-fns';

type TaskList = {
    id: string,
    created: string | Date,
    createdFormated?: string,
    tarefa: string,
    userId: string,
    userName: string,
}

interface BoardProps {
    user: {
        id: string,
        nome: string,
    }

    data: string
}

export default function Board({ user, data }: BoardProps) {

    const [input, setInput] = useState('');
    const [taskList, setTaskList] = useState<TaskList[]>(JSON.parse(data));

    async function handleAddTask(e: FormEvent) {
        e.preventDefault();

        if (input === '') {
            alert('Preencha o campo.')
            return;
        }

        await firebase.firestore().collection('tasks')
            .add({
                created: new Date(),
                tarefa: input,
                userId: user.id,
                userName: user.nome,
            })
            .then(doc => {
                console.log('Cadastrado com sucesso')
                let data = {
                    id: doc.id,
                    created: new Date(),
                    createdFormated: format(new Date(), 'dd MMMM yyyy'),
                    tarefa: input,
                    userId: user.id,
                    userName: user.nome,
                }

                setTaskList([...taskList, data]);
                setInput('');
            })

            .catch((e) => {
                console.log(e.code);
            })
    }

    return (
        <>
            <Head>
                <title>Minhas tarefas • Board</title>
            </Head>
            <main className={styles.container}>
                <form onSubmit={handleAddTask}>
                    <div className={styles.inputContainer}>
                        <input
                            onChange={e => setInput(e.target.value)}
                            value={input}
                            placeholder=' '
                            type="text"
                            id='tarefa' />
                        <label htmlFor='tarefa'>
                            Sua tarefa
                        </label>
                    </div>
                    <button type='submit'>
                        <FiPlus />
                    </button>
                </form>

                <h1>
                    {taskList.length === 0 ? 'Você não possui tarefas'
                    : 
                    taskList.length === 1 
                    ? `Você tem ${taskList.length} tarefa`
                    : `Você tem ${taskList.length} tarefas`
                    }
                </h1>

                <section>
                    {taskList.map(task => (
                        <article key={task.id} className={styles.taskList}>
                            <Link href={`/board/${task.id}`}>
                                <p>{task.tarefa}</p>
                            </Link>
                            <div className={styles.actions}>
                                <div>
                                    <div>
                                        <FiCalendar size={16} color='#ffb800' />
                                        <time>{task.createdFormated}</time>
                                    </div>
                                    <button className={styles.editarBtn}>
                                        <FiEdit2 />
                                        <span>Editar</span>
                                    </button>
                                </div>

                                <button className={styles.excluirBtn}>
                                    <FiTrash />
                                    <span>Excluir</span>
                                </button>
                            </div>
                        </article>
                    ))}
                </section>
            </main>

            <div className={styles.vipContainer}>
                <FiStar className={styles.vipBadge} />

                <h3>Obrigado pro ser apoiador deste projeto :)</h3>
                <div>
                    <FiClock />
                    <time>Última doação foi feitas 3 dias atrás.</time>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const tasks = await firebase.firestore().collection('tasks')
    .where('userId', '==', session?.id)
    .orderBy('created', 'asc').get();

    const data = JSON.stringify(
        tasks.docs.map(u => {
            return {
                id: u.id,
                createdFormated: format(u.data().created.toDate(), 'dd MMMM yyyy'),
                ...u.data(),
            }
        })
    )

    const user = {
        nome: session?.user.name,
        id: session?.id,
    }

    return {
        props: {
            user,
            data
        }
    }
}
