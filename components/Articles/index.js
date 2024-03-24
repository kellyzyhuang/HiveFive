import styles from "./article.module.css";

export default function NavBar(props) {
    const { image, title } = props;
    return (
        <>
            <div className={styles.article}>
                <img className={styles.featuredImage} src={image} alt={title} />
                <h2 className={styles.articleTitle}>{title}</h2>
            </div>
        </>
    );
}