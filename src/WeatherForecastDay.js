import React from "react";


export default function WeatherForecastDay(props){

    function maxTemperature(){
        let temperature = Math.round(props.data.temperature.maximum)
        return `${temperature}°`;
    }

    function minTemperature(){
        let temperature = Math.round(props.data.temperature.minimum)
        return `${temperature}°`;
    }

    function day(){
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
        return days[day];
    }

    return(
        <div>
    <div className="row">
         <div className="col-4 WeatherForecast-day">
                {day()}
            </div>
            <div className="col-5 Forecast-icon">
                <img src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`} alt={props.data.description}  />
            </div>
            <div className="col-3 WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>
                <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
            </div>
            </div>
            </div>
    );
}