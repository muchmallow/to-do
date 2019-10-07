import React from "react";
import {connect} from "react-redux";
import Weather from "../components/Weather";
import {setChosenCity, requestCurrentWeatherTC, requestTwoDayForecastTC} from "../actionCreators/actionCreator";
import {towns} from "../components/Towns";

class WeatherContainer extends React.Component {
    state = {
        isChoosing : false,
    };

    toggleChoosing = () => {
        this.setState({
            isChoosing: !this.state.isChoosing
        });
    };

    closeChoosing = () => {
        this.setState({
            isChoosing: false
        });
    };

    finishingToChoose = (cityId) => {
        this.props.setChosenCity(cityId);
        this.closeChoosing();
    };

    getAngle = (isChoosing) => {
        let rotate = 90;
        return isChoosing ? rotate = 270 : rotate;
    };

    componentDidMount() {
        if (Date.now() - this.props.lastWeatherRequestTime > 3600000) {
            this.props.requestCurrentWeatherTC(this.props.chosenCity);
            this.props.requestTwoDayForecastTC(this.props.chosenCity);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.chosenCity !== this.props.chosenCity) {
            this.props.requestCurrentWeatherTC(this.props.chosenCity);
            this.props.requestTwoDayForecastTC(this.props.chosenCity);
        }
    }

    render() {
        if (this.props.twoDayForecast.length !== 0) {
            console.log(this.props.twoDayForecast);
            return (
                <Weather currentWeather={this.props.currentWeather}
                         isChoosing={this.state.isChoosing}
                         towns={towns}
                         toggleChoosing={this.toggleChoosing}
                         closeChoosing={this.closeChoosing}
                         finishingToChoose={this.finishingToChoose}
                         getAngle={this.getAngle}
                         twoDayForecast={this.props.twoDayForecast}/>
            );
        }
    }
}

let mapStateToProps = (state) => {
    return {
        currentWeather: state.weatherReducer.currentWeather,
        chosenCity: state.weatherReducer.chosenCity,
        lastWeatherRequestTime: state.weatherReducer.lastWeatherRequestTime,
        twoDayForecast: state.weatherReducer.twoDayForecast
    }
};

export default connect(mapStateToProps, {setChosenCity, requestCurrentWeatherTC, requestTwoDayForecastTC})(WeatherContainer);