import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import styles from '../styles/styles.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Board App</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.sectionContainer}>
          <img src='./images/board_image.svg' alt='Board Illustration' />
          <div>
            <h1>Uma ferramenta para auxiliar sua rotina diária.</h1>
            <p>Escreva, planeje e organize-se.</p>

            <span>100% Gratuita <span>e online!</span></span>
          </div>
        </section>

        <div className={styles.apoiadoresContainer}>
          <h2>Apoiadores:</h2>
          <div>
            <img src='images/avatar_icon.png' alt='Usuário 1' />
            <img src='images/avatar_icon.png' alt='Usuário 2' />
            <img src='images/avatar_icon.png' alt='Usuário 3' />
            <img src='images/avatar_icon.png' alt='Usuário 4' />
            <img src='images/avatar_icon.png' alt='Usuário 5' />
            <img src='images/avatar_icon.png' alt='Usuário 6' />
            <img src='images/avatar_icon.png' alt='Usuário 7' />
            <img src='images/avatar_icon.png' alt='Usuário 8' />
            <img src='images/avatar_icon.png' alt='Usuário 9' />
            <img src='images/avatar_icon.png' alt='Usuário 10' />
            <img src='images/avatar_icon.png' alt='Usuário 11' />
            <img src='images/avatar_icon.png' alt='Usuário 12' />
            <img src='images/avatar_icon.png' alt='Usuário 13' />
            <img src='images/avatar_icon.png' alt='Usuário 14' />
            <img src='images/avatar_icon.png' alt='Usuário 15' />
            <img src='images/avatar_icon.png' alt='Usuário 16' />
            <img src='images/avatar_icon.png' alt='Usuário 17' />
            <img src='images/avatar_icon.png' alt='Usuário 18' />
            <img src='images/avatar_icon.png' alt='Usuário 19' />
            <img src='images/avatar_icon.png' alt='Usuário 20' />
          </div>
        </div>

      </main>
    </>
  )
}



