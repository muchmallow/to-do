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
        const {weather, main, visibility, wind, clouds, dt, sys, name} = this.props.currentWeather;
        return (
            <Weather weather={weather}
                     main={main}
                     visibility={visibility}
                     wind={wind}
                     clouds={clouds}
                     dt={dt}
                     sys={sys}
                     name={name}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentWeather: state.weatherReducer.currentWeather
    }
};

export default connect(mapStateToProps, {requestCurrentWeatherTC})(WeatherContainer);