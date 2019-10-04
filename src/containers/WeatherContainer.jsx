import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Weather from "../components/Weather";
import {setChosenCity, requestCurrentWeatherTC} from "../actionCreators/actionCreator";
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
        this.props.requestCurrentWeatherTC(this.props.chosenCity);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.chosenCity !== this.props.chosenCity) {
            this.props.requestCurrentWeatherTC(this.props.chosenCity);
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
                     getAngle={this.getAngle}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentWeather: state.weatherReducer.currentWeather,
        chosenCity: state.weatherReducer.chosenCity
    }
};

export default connect(mapStateToProps, {setChosenCity, requestCurrentWeatherTC})(WeatherContainer);