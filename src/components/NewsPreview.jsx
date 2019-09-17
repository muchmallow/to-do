import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./NewsPreview.module.css";

class NewsPreview extends React.PureComponent {
    render() {
        const {id, author, title, description, image, date, content} = this.props;
        return (
            <div>
                <div>
                    <NavLink to={"/news/" + id}>
                        <img src={image} alt={"articleImage"}/>
                    </NavLink>
                        <p>{author}</p>
                        <p>{date}</p>
                    <NavLink to={"/news/" + id}>
                        <span>{title}</span>
                    </NavLink>

                </div>
                <div>
                    <NavLink to={"/news/" + id}>
                        <p>{description}</p>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default NewsPreview;