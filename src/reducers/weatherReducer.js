import {
    SET_CURRENT_WEATHER,
    SET_TWO_DAY_FORECAST,
    SET_CHOSEN_CITY,
    SET_ARRAY_OF_CITIES
} from "../constants";

const initialState = {
    currentWeather: {
        humidity: null,
        partOfDay: null,
        pressure: null,
        lastObservationTime: null,
        clouds: null,
        city: null,
        windSpeed: null,
        windDirection: null,
        visibility: null,
        sunset: null,
        sunrise: null,
        snowfall: null,
        weather: {
            icon: null,
            code: null,
            description: null
        },
        temperature: null,
        feelsLike: null
    },
    chosenCity: null,
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
        case SET_CHOSEN_CITY: {
            return {
                ...state,
                chosenCity: action.chosenCity
            }
        }
        case SET_ARRAY_OF_CITIES: {
            return {
                ...state,
                towns: action.towns
            }
        }
        default:
            return state;
    }
};

export default weatherReducer;