import React from "react";
import "./App.css";
import Weather from "./Weather";


export default function App(){
    return( 
        <div className="App">
            <div className="container">
           
           <Weather defaultCity="New York"/>
           <footer>
            This project was built by {" "}
            <a href="https://benevolent-druid-a3543f.netlify.apphttps://benevolent-druid-a3543f.netlify.app/" target="_blank" rel="noreferrer">Yegan Salehi </a>
            and is {" "}
            <a href="https://github.com/sedi-yegan/react-vanilla-weather-app" target="_blank" rel="noreferrer"> open-sourced on Github.</a>
           </footer>
        </div>
        </div>
    )
    ;
}
