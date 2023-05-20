import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){


const [weatherData, setWeatherData] = useState ({ready: false });

function handleResponse(response){ 
    console.log(response.data)
    setWeatherData({
        ready:true,
        temperature:response.data.temperature.current,
            wind:response.data.wind.speed,
            city:response.data.city,
             description:response.data.condition.description,
              iconUrl:`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
   
}

if (weatherData.ready){
return(

    <div className="Weather">
        <div className="Weather-app">

            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control" />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-secondary w-100" id="my-button" /> 
            </div>
            </div>
            </form>

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
    <li>wedensday 07:52</li>
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
            </div>
    );

} else{

    const apiKey = "tb5f08b166ada0ab28a3f4o4dec6c3e0";
    
    const apiUrl =`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    
}

}