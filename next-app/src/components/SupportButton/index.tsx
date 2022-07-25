import styles from './styles.module.scss';

import React from 'react'
import Link from 'next/link';

import { FiHeart } from 'react-icons/fi';

export default function SupportButton() {
    return (
        <div className={styles.donateContainer}>
            <Link className={styles.donateContainer} href='/donate'>
                <a>
                    <FiHeart />
                    <span>Apoiar</span>
                </a>
            </Link>
        </div>
    )
}
