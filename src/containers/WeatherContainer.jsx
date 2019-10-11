import React from "react";
import {connect} from "react-redux";
import Weather from "../components/Weather";
import {setChosenCity, requestWeatherTC} from "../actionCreators/actionCreator";
import {towns} from "../components/Towns";

class WeatherContainer extends React.Component {
    state = {
        isChoosing : false
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

    // handleScroll = (e) => {
    //     let element = e.target;
    //     if (element.scrollWidth - element.scrollLeft === element.clientWidth) {
    //         element.scrollLeft += 50;
    //         //console.log(element.scrollWidth);
    //     }
    // };

    componentDidMount() {
        if (Date.now() - this.props.lastWeatherRequestTime > 3600000) {
            this.props.requestWeatherTC(this.props.chosenCity);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.chosenCity !== this.props.chosenCity) {
            this.props.requestWeatherTC(this.props.chosenCity);
        }
    }

    render() {
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

let mapStateToProps = (state) => {
    return {
        currentWeather: state.weatherReducer.currentWeather,
        chosenCity: state.weatherReducer.chosenCity,
        lastWeatherRequestTime: state.weatherReducer.lastWeatherRequestTime,
        twoDayForecast: state.weatherReducer.twoDayForecast
    }
};

export default connect(mapStateToProps, {setChosenCity, requestWeatherTC})(WeatherContainer);