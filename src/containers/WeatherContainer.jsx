import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Weather from "../components/Weather";
import {setChosenCity, requestCurrentWeatherTC} from "../actionCreators/actionCreator";
import {towns} from "../components/Towns";

class WeatherContainer extends React.Component {
    state = {
        isChoosing : false
    };

    startingToChoose = () => {
        this.setState({
            isChoosing: true
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
                     startingToChoose={this.startingToChoose}
                     closeChoosing={this.closeChoosing}
                     finishingToChoose={this.finishingToChoose}/>
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