import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {unsetCurrentArticle} from "../actionCreators/actionCreator";
import Article from "../components/Article";

class ArticleContainer extends React.PureComponent {
    render() {
        const {id, author, title, description, url, image, date, content} = this.props.currentArticle;
        return (
            <Article id={id}
                     author={author}
                     title={title}
                     description={description}
                     url={url}
                     image={image}
                     date={date}
                     content={content}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentArticle: state.newsReducer.currentArticle
    }
};

export default compose(
    connect(mapStateToProps, {unsetCurrentArticle}),
    withRouter,
)(ArticleContainer);