import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props){

    let [loaded, setLoaded] = useState(false); 
    let [forecast, setForecast] = useState(null); 
   
   
    function handleResponse(response){
        console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
}

 if (loaded){


return(
        <div>
           <WeatherForecastDay data={forecast[0]}/>
       </div>
    );



 } else{

    let apiKey = "tb5f08b166ada0ab28a3f4o4dec6c3e0";
    let lon = props.coordinates.longitude;
    let lat= props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);

    return null;

}
    
 }
