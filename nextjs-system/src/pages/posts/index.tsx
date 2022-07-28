import Head from "next/head";
import styles from './styles.module.scss';
import Link from "next/link";
import Image from "next/image";
import thumbImage from '../../../public/images/thumb.png';

import { FiCalendar, FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Conteúdos</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>

                    <Link href='/'>
                        <a className={styles.postContent}>
                            <Image
                                src={thumbImage}
                                alt='Post título 1'
                                quality={100}
                                width={720}
                                height={410}
                            />
                            <strong>Criando meu primeiro aplicativo</strong>
                            <time><FiCalendar /> 27 Julho 2022</time>
                            <p>
                                Eiusmod occaecat irure sit est incididunt deserunt officia sint Lorem officia ex dolore nulla.
                                In magna officia Lorem adipisicing aute anim in in.
                                In tempor aliqua magna do duis occaecat pariatur culpa consequat irure elit.
                            </p>
                        </a>
                    </Link>

                    <div className={styles.buttonNavigate}>
                        <div>
                            <button>
                                <FiChevronsLeft size={20} color='#FFF' />
                            </button>
                            <button>
                                <FiChevronLeft size={20} color='#FFF' />
                            </button>
                        </div>

                        <div>
                            <button>
                                <FiChevronRight size={20} color='#FFF' />
                            </button>
                            <button>
                                <FiChevronsRight size={20} color='#FFF' />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
};
