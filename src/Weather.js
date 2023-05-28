import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){

const [weatherData, setWeatherData] = useState ({ready: false });
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response){ 
    console.log(response.data)
    setWeatherData({
        ready:true,
        coordinates:response.data.coordinates,
        temperature:response.data.temperature.current,
        wind:response.data.wind.speed,
        humidity:response.data.temperature.humidity,
        city:response.data.city,
        date:new Date (response.data.time * 1000),
        description:response.data.condition.description,
        iconUrl:`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
   
}

function search(){
    const apiKey = "tb5f08b166ada0ab28a3f4o4dec6c3e0";
    
    const apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

}

function handleSubmit(event){
    event.preventDefault();
     search();
}

function handleCityChange(event){
     setCity(event.target.value);
}

if (weatherData.ready){
return(

    <div className="Weather">
        <div className="Weather-app">

            <form onSubmit={handleSubmit}>
                <div className="row g-2">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange} />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="search-engine btn btn-secondary w-100" /> 
            </div>
            </div>
            </form>

            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates}  />


            </div>
            </div>
    );

} else{

     search();
    
}

}