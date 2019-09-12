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
        <span>{`${amount} Tasks to do`}</span>
        <div>
            {
                BTN_FILTERS.map(({id, text}) => (
                    <button key={id} onClick={() => changeFilter(id)}>{text}</button>
                ))
            }
        </div>
    </div>
);

export default Footer;