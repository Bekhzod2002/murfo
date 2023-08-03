import styles from './About.module.scss';

import { AiOutlineBulb, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BsJoystick } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();
    return (
        <div className={styles.about} id="about">
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h3 className={styles.title}>{t("About.1")}</h3>
                </div>
                <div className={styles.aboutList}>
                    <div className={styles.aboutItem}>
                        <div href="#" className={styles.aboutItemHeading}>
                            <div className={styles.aboutItemIcon}>
                                <AiOutlineBulb strokeWidth="0" />
                            </div>
                            <a href="#">
                                <h4 className={styles.aboutItemTitle}>{t("About.2")}</h4>
                            </a>
                        </div>
                        <p className={styles.aboutItemDes}>
                            {t("About.3")}
                        </p>
                    </div>
                    <div className={styles.aboutItem}>
                        <div href="#" className={styles.aboutItemHeading}>
                            <div className={styles.aboutItemIcon}>
                                <AiOutlineFundProjectionScreen strokeWidth="0" />
                            </div>
                            <a href="#">
                                <h4 className={styles.aboutItemTitle}>{t("About.4")}</h4>
                            </a>
                        </div>
                        <p className={styles.aboutItemDes}>
                            {t("About.3")}
                        </p>
                    </div>
                    <div className={styles.aboutItem}>
                        <div href="#" className={styles.aboutItemHeading}>
                            <div className={styles.aboutItemIcon}>
                                <BsJoystick strokeWidth="0" />
                            </div>
                            <a href="#">
                                <h4 className={styles.aboutItemTitle}>{t("About.5")}</h4>
                            </a>
                        </div>
                        <p className={styles.aboutItemDes}>
                            {t("About.3")}
                        </p>
                    </div>
                </div>
                <div className={styles.aboutInfomation}>
                    <div className={styles.aboutContent}>
                        <h3 className={styles.aboutContentTitle}>{t("About.6")}</h3>
                        <p className={styles.aboutContentText}>
                            {t("About.7")}
                        </p>
                        <div className={styles.aboutContentFooter}>
                            <p>{t("About.8")}</p>
                            <a href="#">{t("About.1")}</a>
                        </div>
                    </div>
                    <div className={styles.aboutContentImg}>
                        <img
                            src="https://themes.themesbrand.com/zooki/react/static/media/about-img.cb735e1c0599d2b5739c.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
