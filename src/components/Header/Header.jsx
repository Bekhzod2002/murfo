import styles from './Header.module.scss';
import logo from '../../assets/image/logo.png';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import i18next from 'i18next';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

function Header() {
    const {t} =useTranslation();
    const handleLanguage = (lang) => {
        i18next.changeLanguage(lang);
      };
    const headerRef = useRef();

    const [isNavShow, setIsNavShow] = useState(false);

    const handleNavShow = () => {
        setIsNavShow(!isNavShow);
    };

    useEffect(() => {
        const changeHeaderColor = () => {
            const scrollHeight = window.scrollY;
            headerRef.current.style.backgroundColor = scrollHeight > 50 ? 'black' : 'transparent';
        };

        window.addEventListener('scroll', changeHeaderColor);

        return () => {
            window.removeEventListener('scroll', changeHeaderColor);
        };
    });

    return (
        <header className={styles.header} ref={headerRef}>
            <div className={styles.container}>
                <a href="/" className={styles.logo}>
                    <img src={logo} alt="" />
                </a>
                <button className={styles.menuBtn} onClick={handleNavShow}>
                    <AiOutlineMenu />
                </button>
                <nav className={styles.navBar}>
                    <ul
                        className={clsx(styles.navList, {
                            [styles.hide]: !isNavShow,
                        })}
                    >
                        <li className={styles.navItem}>
                            <a href="#home">{t("header.1")}</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#about">{t("header.2")}</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#services">{t("header.3")}</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#features">{t("header.4")}</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#pricing">{t("header.5")}</a>
                        </li>

                        <li className={styles.navItem}>
                            <a href="#blog">{t("header.6")}</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#contact">{t("header.7")}</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#language">
                            <button onClick={() => handleLanguage("uz")}>
                                UZ
                            </button>
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#language">
                                <button onClick={() => handleLanguage("ru")}>
                                    RU
                                </button>
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#language">
                                <button onClick={() => handleLanguage("en")}>
                                    EN
                                </button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
