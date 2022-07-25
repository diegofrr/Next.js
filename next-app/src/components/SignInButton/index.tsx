import styles from './styles.module.scss';

import { AiFillGithub } from "react-icons/ai";
import { FiLogOut } from 'react-icons/fi'

import { signIn, signOut, useSession } from 'next-auth/react';

export default function SignInButton() {

    const {data: session, status} = useSession();

    console.log(session)

    return session ? (
        <button
            type='button'
            className={styles.signInButton}
            onClick={() => signOut()}
        >
            <img  src={session.user.image} alt='Avatar img'/>
            <span className={styles.nome}>Olá, {session.user?.name.split(' ')[0]}!</span>
            <FiLogOut className={styles.closeIcon} />
        </button>

    ) : (
        <button
            type='button'
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <AiFillGithub size={24} color='#fff' />
            <span className={styles.github}>Entrar com o GitHub</span>
        </button>
    )
};
