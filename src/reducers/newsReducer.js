import {SET_ARTICLES, SET_CURRENT_PAGE, SET_TOTAL_NEWS_COUNT, SET_TOPIC, SET_SORT_BY} from "../constants";

let initialState = {
    articles: [],
    totalNewsCount: 0,
    currentPage: 1,
    pageSize: 20,
    topic: "apple",
    sortBy: "publishedAt"
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTICLES: {
            return {
                ...state,
                articles: [...action.articles]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_NEWS_COUNT: {
            return {
                ...state,
                totalNewsCount: action.totalNewsCount
            }
        }
        case SET_TOPIC: {
            return {
                ...state,
                topic: action.topic
            }
        }
        case SET_SORT_BY: {
            return {
                ...state,
                sortBy: action.sortBy
            }
        }
        default:
            return state;
    }
};

export default newsReducer;