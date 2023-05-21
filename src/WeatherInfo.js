import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function WeatherInfo(props){
    return(

        <div className="WeatherInfo">
            <div className="col-12">
                <div className="card default-card mb-3">
                    <div class="card-body temperature-card-body" id="temperature-card-body"></div>
    <div className="row">
        <div className="col-6">
    <h1 >{props.data.city}</h1>
    </div>
   
    <div className="col-6">
         <div class="weather-temperature">
    <img src={props.data.iconUrl}
        alt={props.data.description}
        className="float-left"
        />
        
            <strong className="temperature">
       {Math.round(props.data.temperature)} </strong> 
       <span className="unit">°C</span>
       </div>
    </div>
    </div>

<div className="row">

    <div className="col-6"> 
<ul>
    <li> <FormattedDate date={props.data.date} /> </li>
    <li className="text-capitalize">{props.data.description}</li>
    </ul>
    </div>
    <div className="col-6">
        <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind : {Math.round(props.data.wind)} km/h</li>
        </ul>
    </div>
</div>

</div> 
</div>

</div>

    );
}