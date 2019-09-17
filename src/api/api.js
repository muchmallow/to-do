import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://newsapi.org/v2/",
    headers: {
        "X-Api-Key": "40b5268a68a74369a4eabc0b9745407e"
    }
});

export const newsAPI = {
    getNews(topic = "apple", sortBy = "publishedAt", pageSize = 20, currentPage = 1) {
        return instance.get(`everything?language=en&q=${topic}&sortBy=${sortBy}&pageSize=${pageSize}&page=${currentPage}`);
    },
    getTopNews(pageSize = 20, currentPage = 1) {
        return instance.get(`top-headlines?pageSize=${pageSize}&page=${currentPage}`);
    }
};