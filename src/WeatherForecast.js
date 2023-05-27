import React from "react";
import "./WeatherForecast.css";
export default function WeatherForecast(props){
    return(
        <div className="row">
            <div className="col-4 WeatherForecast-day">
                thu
            </div>
            <div className="col-4 Forecast-icon">
                <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png"
        alt={props.data.condition.description}
        />
            </div>
            <div className="col-4 WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">19°</span>
                <span className="WeatherForecast-temperature-min">10°</span>
            </div>
        </div>
    )
}
