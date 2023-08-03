import clsx from 'clsx';
import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';

function Footer() {
    const {t} = useTranslation();
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={clsx(styles.footerItem, styles.aboutUs)}>
                        <h3 className={styles.title}>{t("footer.1")}</h3>
                        <p className={styles.description}>
                            {t("footer.2")}
                        </p>
                    </div>
                    <div className={styles.footerItem}>
                        <h3 className={styles.title}>{t("footer.1")}</h3>
                        <ul className={styles.footerSub}>
                            <li className={styles.footerSubItem}>
                                <a href="#">{t("footer.3")}</a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#">{t("footer.4")}</a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#"> {t("footer.5")} </a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#">{t("footer.6")}</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerItem}>
                        <h3 className={styles.title}>{t("footer.1")}</h3>
                        <ul className={styles.footerSub}>
                            <li className={styles.footerSubItem}>
                                <a href="#">{t("footer.3")}</a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#">{t("footer.4")}</a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#"> {t("footer.5")} </a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#">{t("footer.6")}</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerItem}>
                        <h3 className={styles.title}>{t("footer.1")}</h3>
                        <ul className={styles.footerSub}>
                            <li className={styles.footerSubItem}>
                                <a href="#">{t("footer.3")}</a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#">{t("footer.4")}</a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#"> {t("footer.5")} </a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#">{t("footer.6")}</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </footer>
            <div className={styles.footerInfo}>Created by Behzod_Jalolov special for moorfo</div>
        </>
    );
}

export default Footer;
