import styles from './styles.module.scss';
import Link from 'next/link';
import SignInButton from '../SignInButton';

import { FiHome, FiLayout } from 'react-icons/fi'
import { useState } from 'react';

export function Header() {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href='/'>
                    <img src='/images/logo.svg' alt='Application logo' />
                </Link>
                <nav>
                    <Link href='/'>
                        <a>
                            <FiHome />
                            <span>Home</span>
                        </a>
                    </Link>
                    <Link href='/board'>
                        <a>
                            <FiLayout />
                            <span>Meu board</span>
                        </a>
                    </Link>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
};
