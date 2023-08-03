import clsx from 'clsx';
import styles from './Pricing.module.scss';
import { useTranslation } from 'react-i18next';
function Pricing() {
    const {t} = useTranslation();
    return (
        <div className={styles.pricing} id="pricing">
            <div className={styles.container}>
                <h3 className={styles.title}>{t("pricing.1")}</h3>
                <ul className={styles.pricingList}>
                    <li className={styles.pricingItem}>
                        <div className={styles.pricingItemContainer}>
                            <div className={styles.pricingItemHeading}>
                                <p className={styles.pricingItemTitle}>{t("pricing.2")}</p>

                                <p className={styles.pricingItemCount}>
                                    <sup>$</sup>19.00
                                </p>
                            </div>
                            <ul className={styles.pricingItemContent}>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                            </ul>
                            <a href="#" className={styles.pricingBtn}>
                                {t("pricing.4")}
                            </a>
                        </div>
                    </li>
                    <li className={clsx(styles.pricingItem, styles.active)}>
                        <div className={styles.pricingItemContainer}>
                            <div className={styles.pricingItemHeading}>
                                <p className={styles.pricingItemTitle}>{t("pricing.2")}</p>

                                <p className={styles.pricingItemCount}>
                                    <sup>$</sup>19.00
                                </p>
                            </div>
                            <ul className={styles.pricingItemContent}>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                            </ul>
                            <a href="#" className={styles.pricingBtn}>
                                {t("pricing.4")}
                            </a>
                        </div>
                    </li>
                    <li className={styles.pricingItem}>
                        <div className={styles.pricingItemContainer}>
                            <div className={styles.pricingItemHeading}>
                                <p className={styles.pricingItemTitle}>{t("pricing.2")}</p>

                                <p className={styles.pricingItemCount}>
                                    <sup>$</sup>19.00
                                </p>
                            </div>
                            <ul className={styles.pricingItemContent}>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                            </ul>
                            <a href="#" className={styles.pricingBtn}>
                                {t("pricing.4")}
                            </a>
                        </div>
                    </li>
                    <li className={styles.pricingItem}>
                        <div className={styles.pricingItemContainer}>
                            <div className={styles.pricingItemHeading}>
                                <p className={styles.pricingItemTitle}>{t("pricing.2")}</p>

                                <p className={styles.pricingItemCount}>
                                    <sup>$</sup>19.00
                                </p>
                            </div>
                            <ul className={styles.pricingItemContent}>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                                <li className={styles.pricingItemPrice}>{t("pricing.3")}</li>
                            </ul>
                            <a href="#" className={styles.pricingBtn}>
                                {t("pricing.4")}
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Pricing;
