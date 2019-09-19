import React, {Fragment} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import Header from "./components/Header";
import styles from './App.module.css';
import TodoApp from "./containers/TodoApp";
import NewsContainer from "./containers/NewsContainer";
import WeatherContainer from "./containers/WeatherContainer";


class App extends React.PureComponent {
    render() {
        return (
            <Fragment>
                <Header title="To do list"/>
                <Switch>
                    <Route path={"/news/:articleId?"} render={() => <NewsContainer/>}/>
                    <Route path={"/weather"} render={() => <WeatherContainer/>}/>
                    <Route path={"/"} render={() => <TodoApp/>}/>
                </Switch>
            </Fragment>
        );
    }
}

export default compose(
    withRouter,
    connect())(App);
