import React from 'react'
import { useState, useCallback } from "react";

import { Marker, GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '350px',
  height: '250px'
};


function MyMaps(props) {
    const center = {
      lat: props.lat? props.lat: 33.626309, // default latitude
      lng: props.lng? props.lng: 72.910609, // default longitude
    };

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.REACT_APP_MAPS_KEY
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback( (map) => {
        const bounds =  new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds)

        setMap(map)

    }, [])

    const onUnmount = React.useCallback((map) => {
        setMap(null)
      }, [])

    return isLoaded ? (
      <div className="GoogleMapSection">
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={center}/>
        </GoogleMap>
        </div>
    ) : <></>
}


export default React.memo(MyMaps)