import React from "react";
import styles from "./Footer.module.css";

const BTN_FILTERS = [
    {
        text: "All",
        id: "all",
    },
    {
        text: "Active",
        id: "active",
    },
    {
        text: "Completed",
        id: "completed"
    }
];

const Footer = ({amount, currentFilter, changeFilter}) => (
    <div className={styles.buttonsBottom}>
        <span className={styles.amount}>{`${amount} Left`}</span>
            {
                BTN_FILTERS.map(({id, text}) => (
                    <button className={styles.btn} key={id} onClick={() => changeFilter(id)}>{text}</button>
                ))
            }
    </div>
);

export default Footer;