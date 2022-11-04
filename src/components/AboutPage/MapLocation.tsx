import * as React from "react";
import './AboutPage.css';
import GoogleMapReact from 'google-map-react';

const MapLocation: React.FC = () => {
  return(
    <div>
      <h1>Find us</h1>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY! }}
          defaultCenter={{ lat: 45.2365327, lng: 19.820655 }} 
          defaultZoom={11}>
        </GoogleMapReact>
      </div>

    </div>
  )
}

export default MapLocation;