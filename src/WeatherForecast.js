import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props){

function handleResponse(response){


let apiKey = "tb5f08b166ada0ab28a3f4o4dec6c3e0";
let lon = props.coordinates.longitude;
let lat= props.coordinates.latitude;
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
  
axios.get(apiUrl).then(handleResponse);
}
return(
        <div className="row">
            <div className="col-4 WeatherForecast-day">
                thu
            </div>
            <div className="col-4 Forecast-icon">
                img
            </div>
            <div className="col-4 WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">19°</span>
                <span className="WeatherForecast-temperature-min">10°</span>
            </div>
        </div>
    )
}
