import React from "react";
import {connect} from "react-redux";
import styles from "./Weather.module.css";

const Weather = ({currentWeather}) => {
    const {humidity, partOfDay, pressure, lastObservationTime, clouds, city, windSpeed, windDirection, visibility, sunset, sunrise, snowfall, weather, temperature, feelsLike} = currentWeather;

    let imgUrl = `https://weatherbit.io/static/img/icons/${weather.icon}.png`;

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.topContainer}>
                    <h1>{city}</h1>
                    <div>
                        <span>Current t&#176; - {temperature}&#176;C</span>
                    </div>
                    <div>
                        <span>Feels Like {feelsLike}&#176;C</span>
                    </div>
                    <div className={styles.imgWrapper}>
                        <span>{weather.description}</span>
                        <img src={imgUrl} alt="weatherIcon"/>
                    </div>
                </div>
                <hr/>
                <div className={styles.bottomContainer}>
                    <div>
                        <span>Wind: {windSpeed} m/s {windDirection}</span>
                    </div>
                    <div>
                        <span>Visibility: {visibility * 1000} m</span>
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

let mapStateToProps = (state) => {
    return {
        currentWeather: state.weatherReducer.currentWeather
    }
};

export default connect(mapStateToProps)(Weather);