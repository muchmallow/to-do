import React from "react";
import NewsPreview from "./NewsPreview";
import Paginator from "./Paginator";

const News = ({articles, totalNewsCount, currentPage, pageSize, topic, sortBy, onPageChanged}) => {
    return <div>
        <Paginator/>
        <div>
            {articles.map(a => <NewsPreview key={a.id}
                                            id={a.id}
                                            author={a.author}
                                            title={a.title}
                                            description={a.description}
                                            image={a.urlToImage}
                                            date={a.publishedAt}
                                            content={a.content}/>)}
        </div>
    </div>
};

export default News;