import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.scss';

const Navbar: React.FC = () => {
    const [borderWidth, setBorderWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = docHeight > 0 ? (scrollTop / docHeight) : 0;
            setBorderWidth(scrolled * 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={styles.navbar}>
            <div
                className={styles['navbar-border']}
                style={{ width: `${borderWidth}%` }}
            />
            <div className={styles.logo}>
                <Link href="/">
                    <img src="icons\logo-fiap.svg" alt="Logo" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;