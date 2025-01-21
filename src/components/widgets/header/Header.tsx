"use client";
import { FC, useState } from "react";

import styles from "./Header.module.scss";
import Link from "next/link";

const Header: FC = () => {
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

    const handleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };
    return (
        <header className={styles.header}>
            <nav>
                <ul
                    className={`${styles.menu} ${
                        isMenuActive ? styles.active : ""
                    }`}
                >
                    <li>
                        <Link
                            href="#top"
                            onClick={() => setIsMenuActive(false)}
                        >
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#calculator"
                            onClick={() => setIsMenuActive(false)}
                        >
                            Найти крепость
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={() => setIsMenuActive(false)}>
                            Инструкция
                        </Link>
                    </li>
                </ul>

                <button
                    className={`${styles.burger} ${
                        isMenuActive ? styles.active : ""
                    }`}
                    onClick={handleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </header>
    );
};

export default Header;
