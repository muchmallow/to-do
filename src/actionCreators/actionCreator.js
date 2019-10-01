import {
    ADD_TASK,
    REMOVE_TASK,
    COMPLETE_TASK,
    CHANGE_FILTER,
    UPDATE_TASK_TEXT,
    SET_TOTAL_NEWS_COUNT,
    SET_CURRENT_PAGE,
    SET_ARTICLES,
    SET_TOPIC,
    SET_SORT_BY,
    SET_CURRENT_ARTICLE,
    UNSET_CURRENT_ARTICLE,
    SET_TWO_DAY_FORECAST,
    SET_CURRENT_WEATHER,
    SET_CHOSEN_CITY, SET_ARRAY_OF_CITIES
} from "../constants";
import {newsAPI, weatherAPI} from "../api/api";

export const addTaskAC = (id, text, isCompleted) => ({
    type: ADD_TASK,
    id,
    text,
    isCompleted
});

export const removeTaskAC = id => ({
    type: REMOVE_TASK,
    id
});

export const completeTaskAC = id => ({
    type: COMPLETE_TASK,
    id
});

export const changeFilterAC = currentFilter => ({
    type: CHANGE_FILTER,
    currentFilter
});

export const updateTaskTextAC = (id, text) => ({
    type: UPDATE_TASK_TEXT,
    id,
    text
});

export const setTotalNewsCountAC = (totalNewsCount) => ({
    type: SET_TOTAL_NEWS_COUNT,
    totalNewsCount
});

export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

export const setArticlesAC = (articles) => ({
    type: SET_ARTICLES,
    articles
});

export const setTopicAC = (topic) => ({
    type: SET_TOPIC,
    topic
});

export const setSortByAC = (sortBy) => ({
    type: SET_SORT_BY,
    sortBy
});

export const setCurrentArticle = (id, author, title, description, url, image, date, content) => ({
    type: SET_CURRENT_ARTICLE,
    id,
    author,
    title,
    description,
    url,
    image,
    date,
    content
});

export const unsetCurrentArticle = () => ({
    type: UNSET_CURRENT_ARTICLE
});

// export const setTwoDayForecast = ({ }) => ({
//     type: SET_TWO_DAY_FORECAST,
//
// });

export const setCurrentWeather = ({rh, pod, pres, ob_time, clouds, city_name, wind_spd, wind_cdir,
                                      vis, sunset, snow, sunrise, weather, temp, app_temp}) => ({
    type: SET_CURRENT_WEATHER,
    rh,
    pod,
    pres,
    ob_time,
    clouds,
    city_name,
    wind_spd,
    wind_cdir,
    vis,
    sunset,
    snow,
    sunrise,
    weather,
    temp,
    app_temp
});

export const setChosenCity = (chosenCity) => ({
    type: SET_CHOSEN_CITY,
    chosenCity
});

export const setArrayOfCities = (towns) => ({
    type: SET_ARRAY_OF_CITIES,
    towns
});

const getIdAndLocaleDateToArticles = (data) => {
    let length = data.articles.length;
    for(let i = 0; i < length; i++) {
        data.articles[i].id = i;
        data.articles[i].publishedAt = new Date(data.articles[i].publishedAt).toLocaleString();
    }
    return data;
};

export const requestNewsTC = (topic, sortBy, pageSize, requestedPage) => async (dispatch) => {
    dispatch(setCurrentPageAC(requestedPage));
    dispatch(setTopicAC(topic));
    dispatch(setSortByAC(sortBy));
    let response = await newsAPI.getNews(topic, sortBy, pageSize, requestedPage);
    let data = await getIdAndLocaleDateToArticles(response.data);
    dispatch(setArticlesAC(data.articles));
    dispatch(setTotalNewsCountAC(data.totalResults));
};

export const requestCurrentWeatherTC = (cityId) => async (dispatch) => {
    try {
        const response = await weatherAPI.getCurrentWeather(cityId);
        // const response = await fetch("https://api.weatherbit.io/v2.0/current?key=90db46941f2d41eba9eef01407d850c5&lang=en&units=M&city_id=706483");
        // const data = await response.json();
        // await dispatch(setCurrentWeather(data.data[0]));
        await dispatch(setCurrentWeather(response.data.data[0]));
    } catch (e) {
        console.log(e);
    }

};

// export const requestTwoDayForecastTC = () => async (dispatch) => {
//     let response = await weatherAPI.getTwoDayForecast();
//     dispatch(setTwoDayForecast(response.data));
// };