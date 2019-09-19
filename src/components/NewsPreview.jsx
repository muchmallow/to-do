import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./NewsPreview.module.css";

class NewsPreview extends React.PureComponent {
    render() {
        const {id, author, title, description, image, date, content} = this.props;
        return (
            <div className={styles.postSection}>
                <NavLink to={"/news/" + id}>
                    <div className={styles.cardWrapper}>
                        <div className={styles.darkerImg}>
                            <img src={image} alt={"articleImage"} className={styles.img}/>
                        </div>
                        <div className={styles.cardTitle}>
                            <div className={styles.postInfo}>
                                <span className={styles.author}>{author}</span>
                                <span className={styles.date}>{date}</span>
                            </div>
                            <p className={styles.title}>{title}</p>
                        </div>
                    </div>
                </NavLink>
                <div>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        );
    }
}

export default NewsPreview;
