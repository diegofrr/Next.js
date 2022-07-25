import styles from './styles.module.scss';
import Head from 'next/head';
import { FiPlus, FiCalendar, FiEdit2, FiTrash, FiClock, FiStar } from 'react-icons/fi'
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';

export default function Board() {

    return (
        <>
            <Head>
                <title>Minhas tarefas • Board</title>
            </Head>
            <main className={styles.container}>
                <form>
                    <div className={styles.inputContainer}>
                        <input placeholder=' ' type="text" id='tarefa' />
                        <label htmlFor='tarefa'>
                            Sua tarefa
                        </label>
                    </div>
                    <button type='submit'>
                        <FiPlus />
                    </button>
                </form>

                <h1>Você tem 2 tarefas</h1>

                <article className={styles.taskList}>
                    <p>Estudar React Native e Next JS</p>
                    <div className={styles.actions}>
                        <div>
                            <div>
                                <FiCalendar size={16} color='#ffb800' />
                                <time>25 Julho de 2022</time>
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
  
    if(!session) {
        return{
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    console.log(session)
  
    return {
      props: {
  
      }
    }
  }
