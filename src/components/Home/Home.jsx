import styles from './Home.module.scss';
import thumnail from '../../assets/image/thumnail.png';
import { useTranslation } from 'react-i18next';

function Home() {
    const {t} = useTranslation();
    return (
        <section className={styles.home} id="home">
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{t("home.1")}</h1>
                    <p className={styles.description}>
                        {t("home.2")}
                    </p>
                    <div className={styles.btnContainer}>
                        <a href="#" className={styles.learnMoreBtn}>
                            {t("home.3")}
                        </a>
                    </div>
                </div>

                <img src={thumnail} alt="Thumnail" className={styles.thumnail} />
            </div>
        </section>
    );
}

export default Home;
