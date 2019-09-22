import {SET_CURRENT_WEATHER, SET_FIVE_DAY_FORECAST} from "../constants";

const initialState = {
    currentWeather: {},
    fiveDayForecast: {}
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_WEATHER: {
            return {
                ...state,
                currentWeather: {
                    ...state.currentWeather,
                    weather: action.weather,
                    main: action.main,
                    visibility: action.visibility,
                    wind: action.wind,
                    clouds: action.clouds,
                    dt: action.dt,
                    sys: action.sys,
                    name: action.name
                }
            }
        }
        default:
            return state;
    }
};

export default weatherReducer;