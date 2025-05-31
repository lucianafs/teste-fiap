import React from 'react';
import styles from '../styles/header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.hero}>
            <h1 className={styles.headline}>
                <span className={`${styles.line} ${styles.first}`}>A Melhor Faculdade</span>
                <span className={`${styles.line} ${styles.second}`}>de Tecnologia</span>
            </h1>
            <div className={styles.backgroundText}>
                <h2>Sobre</h2>
            </div>
        </header>
    );
};

export default Header;