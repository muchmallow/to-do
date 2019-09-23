import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Weather from "../components/Weather";
import {requestCurrentWeatherTC} from "../actionCreators/actionCreator";

class WeatherContainer extends React.PureComponent {
    componentDidMount() {
        this.props.requestCurrentWeatherTC();
    }

    render() {
        return (
            <Weather />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentWeather: state.weatherReducer.currentWeather
    }
};

export default connect(mapStateToProps, {requestCurrentWeatherTC})(WeatherContainer);