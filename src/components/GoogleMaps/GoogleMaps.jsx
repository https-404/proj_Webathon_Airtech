import React from 'react'
import { useState, useCallback } from "react";

import { Marker, GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
    lat: 33.626309, // default latitude
    lng: 72.910609, // default longitude
  };

function MyMaps() {
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
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={center}/>
        </GoogleMap>
    ) : <></>
}

export default React.memo(MyMaps)