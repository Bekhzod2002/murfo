import styles from './Blog.module.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';


function Blog() {
    const { t } = useTranslation();
    return (
        <div className={styles.blog} id="blog">
            <div className={styles.container}>
                <h3 className={styles.title}>{t("blogs.1")}</h3>
                <ul className={styles.blogList}>
                    {[...new Array(3)].map((item, index) => {
                        return (
                            <li className={styles.blogItem} key={index}>
                                <div className={styles.blogItemContainer}>
                                    <p className={styles.blogItemDate}>{t("blogs.2")}</p>
                                    <img
                                        src="https://themes.themesbrand.com/zooki/react/static/media/img-1.f19acca3adc39c364415.jpg"
                                        alt=""
                                        className={styles.blogItemImg}
                                    />
                                    <div className={styles.blogItemContent}>
                                        <p className={styles.blogItemPos}>{t("blogs.3")}</p>
                                        <a href="#" className={styles.blogItemTitle}>
                                            {t("blogs.4")}
                                        </a>
                                        <p className={styles.blogItemDes}>
                                            {t("blogs.5")}
                                        </p>
                                        <div className={styles.readMoreBtnContainer}>
                                            <a href="#" className={styles.readMoreBtn}>
                                                {t("blogs.6")}
                                            </a>
                                            <AiOutlineArrowRight />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Blog;
