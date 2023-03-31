import React, { useEffect } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const [positionOnMap, setPositionOnMap] = {
  lat: 10.99835602,
  lng: 77.01502627
}

const [zoomOnMap, setZoomOnMap] = 11

// Gestion de la geoloc ---
if (navigator.geolocation) {
  console.log("api dispo", navigator.geolocation.getCurrentPosition)
  navigator.geolocation.getCurrentPosition(maPosition);
} else {
  console.log("api pas dispo")
}

function maPosition(position) {
  return setPositionOnMap({
    lat: position.coords.latitude,
    lng: position.coords.longitude
  })
}
//-------------------------

export default function SimpleMap() {
  const defaultProps = {
    center: positionOnMap,
    zoom: zoomOnMap
  };

  console.log(positionOnMap)

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}