import React from "react";
import styles from "./Forecast.module.css";

const Forecast= ({time, precipitation, weatherIcon, temperature}) => {

    const imgUrl = `https://weatherbit.io/static/img/icons/${weatherIcon}.png`;

    return (
        <div className={styles.forecastElementsContainer}>
            <div className={styles.forecastElements}>
                <div className={styles.forecastHour}>{new Date(time).getHours()}</div>
                <div className={styles.forecastIcon}>
                    <div className={styles.forecastChanceOfRain}>{(precipitation > 9) && `${precipitation}%`}</div>
                    <img src={imgUrl} alt="forecastIcon"/>
                </div>
                <div className={styles.forecastTemperature}>{temperature}&#176;</div>
            </div>
        </div>
    );
};

export default Forecast;