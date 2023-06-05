import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props){
    return(

        <div className="WeatherInfo">
            <div className="col-12">
                <div className="card default-card mb-3">
                    <div class="card-body temperature-card-body" id="temperature-card-body"></div>
    <div className="row g-2">
        <div className="col-6 ">
    <h1 className="city" >{props.data.city}</h1>
    </div>
   
    <div className="col-6">
         <div class="weather-temperature">
    <img src={props.data.iconUrl}
        alt={props.data.description}
        className="float-left"
        />
        
        <WeatherTemperature celsius={props.data.temperature} />
           
       </div>
    </div>
    </div>

<div className="row g-2">

    <div className="col-6"> 
<ul>
    <li className="date mb-1"> <FormattedDate date={props.data.date} /> </li>
    <li className="description text-capitalize mt-2">{props.data.description}</li>
    </ul>
    </div>
    <div className="col-6">
        <ul>
            <li className="humidity mb-1">Humidity: {props.data.humidity} %</li>
            <li className="wind mt-2">Wind : {Math.round(props.data.wind)} km/h</li>
        </ul>
    </div>
</div>

</div> 
</div>

</div>

    );
}