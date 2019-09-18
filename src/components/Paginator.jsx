import React, {useState} from "react";
import styles from "./Paginator.module.css";

const Paginator = ({totalNewsCount, currentPage, pageSize, topic, sortBy, onPageChanged, portionSize = 15}) => {

    let pagesCount = Math.ceil(totalNewsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionsCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}
                    className={styles.paginatorBtn}>PREV</button>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
                return (
                    <span key={p}
                          onClick={() => onPageChanged(topic, sortBy, p)}
                          className={(currentPage === p) ? styles.pageNumber : styles.pages}>
                        {p}
                    </span>
                );
            })}

            {portionsCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}
                    className={styles.paginatorBtn}>NEXT</button>}
        </div>
    );
};

export default Paginator;