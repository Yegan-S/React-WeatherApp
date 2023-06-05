import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props){
  const [unit, setUnit] = useState("celsius");


  function ShowFahrenheit(event){
    event.preventDefault();
    setUnit ("fahrenheit")
  }

  function ShowCelsius(event){
     event.preventDefault();
     setUnit ("celsius");
  }

  if (unit === "celsius"){
      return(
      <div className="WeatherTemperature">
         <strong className="temperature">
       {Math.round(props.celsius)} </strong> 
        <span className="unit">°C{" "}|{" "}<a href="/" onClick={ShowFahrenheit}>°F</a></span>
       
       </div>
    );

  } else{
    let fahrenheit = (props.celsius * 9/5) + 32
    return (

      <div>
         <strong className="temperature">
       {Math.round(fahrenheit)} </strong> 
       <span className="unit"><a href="/" onClick={ShowCelsius}>°C</a>{" "}| °F</span>
       </div>

    );
  }
  
}