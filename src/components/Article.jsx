import React from "react";
import styles from "./Article.module.css";

const Article = ({id, author, title, description, url, image, date, content}) => {
    return (
        <div className={styles.article}>
            <div className={styles.headline}>
                <div className={styles.authorAndDate}>
                    <span>{author}</span>
                    <span>{date}</span>
                </div>
                <div className={styles.title}>
                    <h1>{title}</h1>
                </div>
            </div>
            <div className={styles.articleImageWrapper}>
                <img src={image} alt="articleImage" className={styles.articleImage}/>
                <span><a href={url}>Article source here</a></span>
            </div>
            <div className={styles.content}>{content}</div>
        </div>
    );
};

export default Article;