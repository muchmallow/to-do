import React from "react";
import News from "../components/News";
import {connect} from "react-redux";
import {compose} from "redux";
import {requestNewsTC, setCurrentArticle} from "../actionCreators/actionCreator";

class NewsContainer extends React.PureComponent{
    componentDidMount() {
        this.props.requestNewsTC(this.props.topic, this.props.sortBy, this.props.pageSize, this.props.currentPage);
    }

    onPageChanged = (newTopic = this.props.topic, newSortBy = this.props.sortBy, pageNumber = this.props.currentPage) => {
        this.props.requestNewsTC(newTopic, newSortBy, this.props.pageSize, pageNumber);
    };

    render() {
        return (
            <News articles={this.props.articles}
                  totalNewsCount={this.props.totalNewsCount}
                  currentPage={this.props.currentPage}
                  pageSize={this.props.pageSize}
                  topic={this.props.topic}
                  sortBy={this.props.sortBy}
                  onPageChanged={this.onPageChanged}
                  setCurrentArticle={this.props.setCurrentArticle}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        articles: state.newsReducer.articles,
        totalNewsCount: state.newsReducer.totalNewsCount,
        currentPage: state.newsReducer.currentPage,
        pageSize: state.newsReducer.pageSize,
        topic: state.newsReducer.topic,
        sortBy: state.newsReducer.sortBy
    }
};

export default compose(
    connect(mapStateToProps, {requestNewsTC, setCurrentArticle})
)(NewsContainer);