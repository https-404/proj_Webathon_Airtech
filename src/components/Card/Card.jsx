import MyMaps from "../GoogleMaps/GoogleMaps"
import "./Card.css"
import React from "react";
import { useEffect, useState } from "react";
function PackageCard(props) {
    var weatherData = {}
    var [weather, setWeather] = useState('')
    const url=`http://api.weatherapi.com/v1/current.json?q=${props.lat},${props.lng}&key=12181df4bc424428a9782003240303`
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