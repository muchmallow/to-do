import React from "react";
import styles from "./Weather.module.css";
import "./transitionGroup.css";
import {CSSTransition} from "react-transition-group";

const Weather = ({currentWeather, isChoosing, towns, toggleChoosing,
                     closeChoosing, finishingToChoose, getAngle}) => {
    const {
        humidity,
        partOfDay,
        pressure,
        lastObservationTime,
        clouds,
        city,
        windSpeed,
        windDirection,
        visibility,
        sunset,
        sunrise,
        snowfall,
        weather,
        temperature,
        feelsLike
    } = currentWeather;

    const imgUrl = `https://weatherbit.io/static/img/icons/${weather.icon}.png`;

    const menuItems = towns.map(t => {
        return (
            <li key={t.id} id={t.id}
                onClick={() => {finishingToChoose(t.id)}}
                className={styles.listItem}>
                <button className={styles.listItemBtn}>{t.name}</button>
            </li>
        );
    });



    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <h1 onClick={() => toggleChoosing()}>{city}
                    <i style={{transform: `rotate(${getAngle(isChoosing)}deg)`}}
                       className={styles.cityArrow}>&#10148;</i>
                </h1>
                <div className={styles.animateWrapper}>
                    <CSSTransition in={isChoosing} timeout={350}
                                   classNames={"dropDown"} unmountOnExit>
                        <ul className={styles.list}>
                            <i className={styles.listIcon}
                               onClick={() => closeChoosing()}>&#10005;</i>
                            {menuItems}
                        </ul>
                    </CSSTransition>
                </div>
                <div>
                    <span>Current t&#176; {temperature}&#176;C</span>
                </div>
                <div>
                    <span>Feels Like {feelsLike}&#176;C</span>
                </div>
                <div className={styles.imgWrapper}>
                    <span>{weather.description}</span>
                    <img src={imgUrl} alt="weatherIcon"/>
                </div>
                <div>
                    <span>Wind: {windSpeed} m/s {windDirection}</span>
                </div>
                <div>
                    <span>Visibility: {visibility} km</span>
                </div>
                <div>
                    <span>Cloudiness: {clouds}%</span>
                </div>
                <div>
                    <span>Humidity: {humidity}%</span>
                </div>
                <div>
                    <span>Pressure: {pressure} hPa</span>
                </div>
                <div>
                    <span>Sunrise: {sunrise}</span>
                </div>
                <div>
                    <span>Sunset: {sunset}</span>
                </div>
                <div className={styles.station}>
                    <span>There was the last respond from the station at: {lastObservationTime}</span>
                </div>
            </div>
        </div>
    );
};

export default Weather;