import * as axios from "axios";

const instanceNews = axios.create({
    baseURL: "https://newsapi.org/v2/",
    headers: {
        "X-Api-Key": "40b5268a68a74369a4eabc0b9745407e"
    }
});

const instanceWeather = axios.create({
    baseURL: "https://api.weatherbit.io/v2.0/"
});

export const newsAPI = {
    getNews(topic = "apple", sortBy = "publishedAt", pageSize = 20, currentPage = 1) {
        return instanceNews.get(`everything?language=en&q=${topic}&sortBy=${sortBy}&pageSize=${pageSize}&page=${currentPage}`);
    },
    getTopNews(pageSize = 20, currentPage = 1) {
        return instanceNews.get(`top-headlines?pageSize=${pageSize}&page=${currentPage}`);
    }
};

export const weatherAPI = {
    getTwoDayForecast() {
        return instanceWeather.get(`forecast/hourly?key=90db46941f2d41eba9eef01407d850c5&lang=en&units=M&city_id=706483`);
    },
    getCurrentWeather(cityId = "706483") {
        return instanceWeather.get(`current?key=90db46941f2d41eba9eef01407d850c5&lang=en&units=M&city_id=${cityId}`);
    }
};