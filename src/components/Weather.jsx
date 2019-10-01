import React from "react";
//import {Menu, Dropdown, Icon} from "antd";
//import 'antd/dist/antd.css';
import styles from "./Weather.module.css";

const Weather = ({currentWeather, isChoosing, towns, startingToChoose, closeChoosing, finishingToChoose}) => {
    const {humidity,
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
        feelsLike} = currentWeather;

    const imgUrl = `https://weatherbit.io/static/img/icons/${weather.icon}.png`;

    const menuItems = towns.map(t => {
        return (
            <li key={t.id} id={t.id} onClick={() => {finishingToChoose(t.id)}} className={styles.listItem}>
                <button className={styles.listItemBtn}>{t.name}</button>
            </li>
        );
    });

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.topContainer}>
                    {!isChoosing && <h1 onClick={() => startingToChoose()}>{city}</h1>}
                    {isChoosing && <div className={styles.listWrapper}>
                        <ul className={styles.list}>
                            <i className={styles.listIcon} onClick={() => closeChoosing()}>&#10005;</i>
                            {menuItems}
                        </ul>
                        <hr/>
                    </div>}
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
        </div>
    );
};

export default Weather;