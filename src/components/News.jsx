import React from "react";
import NewsPreview from "./NewsPreview";
import Paginator from "./Paginator";

const News = ({articles, totalNewsCount, currentPage, pageSize, topic, sortBy, onPageChanged, setCurrentArticle}) => {
    return <div>
        <Paginator totalNewsCount={totalNewsCount}
                   currentPage={currentPage}
                   pageSize={pageSize}
                   topic={topic}
                   sortBy={sortBy}
                   onPageChanged={onPageChanged}/>
        <div>
            {articles.map(a => <NewsPreview key={a.id}
                                            id={a.id}
                                            author={a.author}
                                            title={a.title}
                                            description={a.description}
                                            url={a.url}
                                            image={a.urlToImage}
                                            date={a.publishedAt}
                                            content={a.content}
                                            setCurrentArticle={setCurrentArticle}/>)}
        </div>
    </div>
};

export default News;