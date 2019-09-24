import * as axios from "axios";

const instanceNews = axios.create({
    baseURL: "https://newsapi.org/v2/",
    headers: {
        "X-Api-Key": "40b5268a68a74369a4eabc0b9745407e"
    }
});

const instanceWeather = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/"
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
    getFiveDayForecast() {
        return instanceWeather.get(`forecast?id=706483&units=metric&APPID=a8e26109a999b36c455b988c3c998bca`);
    },
    getCurrentWeather() {
        return instanceWeather.get(`weather?id=706483&units=metric&APPID=a8e26109a999b36c455b988c3c998bca`);
    }
};