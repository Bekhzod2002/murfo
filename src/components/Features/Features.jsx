import styles from './Features.module.scss';
import { FaReact, FaArrowRight } from 'react-icons/fa';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

function Features() {
    const {t} = useTranslation();
    return (
        <>
            <div className={styles.feature} id="features">
                <div className={styles.container}>
                    <h3 className={styles.title}>{t("features.1")}</h3>
                    <div className={styles.featureItem}>
                        <div className={styles.featureItemContent}>
                            <div className={styles.featureItemIcon}>
                                <FaReact />
                            </div>
                            <h3 className={styles.featureItemTitle}>{t("features.2")}</h3>
                            <p className={styles.featureItemDes}>
                                {t("features.3")}
                            </p>
                            <p className={styles.featureItemDes}>
                                {t("features.4")}
                            </p>
                            <a href="#" className={styles.learnMoreBtn}>
                                {t("features.5")}
                                <FaArrowRight />
                            </a>
                        </div>
                        <div className={styles.featureItemThumnail}>
                            <img
                                src="https://themes.themesbrand.com/zooki/react/static/media/img-1.1bb1c555fb21d91778ad.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.feature, styles.reverse)} id="features">
                <div className={styles.container}>
                    <div className={styles.featureItem}>
                        <div className={styles.featureItemContent}>
                            <div className={styles.featureItemIcon}>
                                <FaReact />
                            </div>
                            <h3 className={styles.featureItemTitle}>{t("features.2")}</h3>
                            <p className={styles.featureItemDes}>
                                {t("features.3")}
                            </p>
                            <p className={styles.featureItemDes}>
                                {t("features.4")}
                            </p>
                            <a href="#" className={styles.learnMoreBtn}>
                                {t("features.5")}
                                <FaArrowRight />
                            </a>
                        </div>
                        <div className={styles.featureItemThumnail}>
                            <img
                                src="https://themes.themesbrand.com/zooki/react/static/media/img-1.1bb1c555fb21d91778ad.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.feature} id="features">
                <div className={styles.container}>
                    <div className={styles.featureItem}>
                        <div className={styles.featureItemContent}>
                            <div className={styles.featureItemIcon}>
                                <FaReact />
                            </div>
                            <h3 className={styles.featureItemTitle}>{t("features.2")}</h3>
                            <p className={styles.featureItemDes}>
                                {t("features.3")}
                            </p>
                            <p className={styles.featureItemDes}>
                                {t("features.4")}
                            </p>
                            <a href="#" className={styles.learnMoreBtn}>
                                {t("features.5")}
                                <FaArrowRight />
                            </a>
                        </div>
                        <div className={styles.featureItemThumnail}>
                            <img
                                src="https://themes.themesbrand.com/zooki/react/static/media/img-1.1bb1c555fb21d91778ad.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features;
