import {SET_CURRENT_WEATHER, SET_TWO_DAY_FORECAST} from "../constants";

const initialState = {
    currentWeather: {},
    twoDayForecast: {}
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_WEATHER: {
            return {
                ...state,
                currentWeather: {
                    ...state.currentWeather,
                    humidity: action.rh,
                    partOfDay: action.pod,
                    pressure: action.pres,
                    lastObservationTime: action.ob_time,
                    clouds: action.clouds,
                    city: action.city_name,
                    windSpeed: action.wind_spd,
                    windDirection: action.wind_cdir,
                    visibility: action.vis,
                    sunset: action.sunset,
                    sunrise: action.sunrise,
                    snowfall: action.snow,
                    weather: action.weather,
                    temperature: action.temp,
                    feelsLike: action.app_temp
                }
            }
        }
        default:
            return state;
    }
};

export default weatherReducer;