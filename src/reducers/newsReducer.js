import {
    SET_ARTICLES,
    SET_CURRENT_PAGE,
    SET_TOTAL_NEWS_COUNT,
    SET_TOPIC,
    SET_SORT_BY,
    SET_CURRENT_ARTICLE,
    UNSET_CURRENT_ARTICLE
} from "../constants";

let initialState = {
    articles: [],
    totalNewsCount: 0,
    currentPage: 1,
    pageSize: 20,
    topic: "apple",
    sortBy: "publishedAt",
    currentArticle: {}
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
        case SET_CURRENT_ARTICLE: {
            return {
                ...state,
                currentArticle: {
                    ...state.currentArticle,
                    id: action.id,
                    author: action.author,
                    title: action.title,
                    description: action.description,
                    url: action.url,
                    image: action.image,
                    date: action.date,
                    content: action.content
                }
            }
        }
        case UNSET_CURRENT_ARTICLE: {
            return {
                ...state,
                currentArticle: {}
            }
        }
        default:
            return state;
    }
};

export default newsReducer;