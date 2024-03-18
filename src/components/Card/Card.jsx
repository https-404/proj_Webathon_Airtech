import MyMaps from "../GoogleMaps/GoogleMaps"
import "./Card.css"
import React from "react";
import { useEffect, useState } from "react";
function PackageCard(props) {
    var weatherData = {}
    var [weather, setWeather] = useState('')
    const url=`http://api.weatherapi.com/v1/current.json?q=${props.lat},${props.lng}&key=${process.env.REACT_APP_WEATHER_API}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setWeather(data.current.condition.text)
    })
    return(
        <div className="card">
             <MyMaps lat={props.lat} lng={props.lng}/>
             <h2 className="card-title">{props.name}</h2>
             <p className="card-text">{props.status}</p>
             <p className="card-text">{weather}</p>
        </div> 
    )
}
//<img className="card-image" src={profilePic} alt="profile picture"></img>
export default PackageCard