import React from "react";
import {connect} from "react-redux";
import styles from "./Weather.module.css";

const Weather = ({currentWeather}) => {
    const {weather, main, visibility, wind, clouds, dt, sys, name} = currentWeather;
    
    let imgUrl = "https://openweathermap.org/img/w/" + weather[0].icon + ".png";
    let dateRise = new Date(sys.sunrise * 1000);
    let hoursRise =  dateRise.getHours();
    let minutesRise = dateRise.getMinutes();
    let dateSet = new Date(sys.sunset * 1000);
    let hoursSet = dateSet.getHours();
    let minutesSet = dateSet.getMinutes();

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.topContainer}>
                    <h1>{name}</h1>
                    <div>
                        <span>Current temperature: {main.temp}&#176;C</span>
                    </div>
                    <div>
                        <span>Varies from {main.temp_min}&#176;C to {main.temp_max}&#176;C</span>
                    </div>
                    <div className={styles.imgWrapper}>
                        <span>{weather[0].main}</span>
                        <img src={imgUrl} alt="weatherIcon"/>
                    </div>
                </div>
                <hr/>
                <div className={styles.bottomContainer}>
                    <div>
                        <span>Wind: {wind.deg}&#176; {wind.speed} m/s</span>
                    </div>
                    <div>
                        <span>Visibility: {visibility} m</span>
                    </div>
                    <div>
                        <span>Cloudiness: {clouds.all}%</span>
                    </div>
                    <div>
                        <span>Humidity: {main.humidity}%</span>
                    </div>
                    <div>
                        <span>Pressure: {main.pressure} hPa</span>
                    </div>
                    <div>
                        <span>Sunrise: {hoursRise}:{minutesRise}</span>
                    </div>
                    <div>
                        <span>Sunset: {hoursSet}:{minutesSet}</span>
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