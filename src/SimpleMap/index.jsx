import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const mapOptions = {
  "tilt": 45,
  "heading": 0,
  "mapId": import.meta.env.VITE_MAP_ID
};

export default function SimpleMap() {
  const [center, setCenter] = useState({
    lat: 48.858370,
    lng: 2.294481
  });

  const [zoom, setZoom] = useState(18);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(maPosition);
    } else {
      console.log("api pas dispo")
    }
  }, []);

  function maPosition(position) {
    setCenter({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    })
  }

  return (
    <>
      {/* visualisation de l'Histoire géographiquement, avec des informations sur les événements et personnages historiques liés à chaque région */}
      {/* Important! Always set the container height explicitly */}
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API_KEY }}
          center={center}
          zoom={zoom}
          options={mapOptions}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </>
  );
}