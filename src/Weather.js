import React from "react";
import "./Weather.css";
export default function Weather(){
    return(
    <div className="Weather">
        <div className="Weather-app">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control" />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary"/> 
            </div>
            </div>
            </form>
    <h1>new york</h1>
    <ul>
    <li>wedensday 07:52</li>
    <li>mostly cloudy</li>
    </ul>
<div className="row">
    <div className="col-6">
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        alt=""
        />
        6°C

    </div>
    <div className="col-6">
        <ul>
            <li>humidity:30%</li>
            <li>wind: 1km/h</li>
        </ul>
    </div>
</div>
</div> 
            </div>
    );
}