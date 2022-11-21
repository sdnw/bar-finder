import GoogleMapReact from "google-map-react";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const API_KEY = process.env.REACT_APP_API_KEY;

const LocationPin = ({ text }) => (
  <div className="pin">
    <LocationOnIcon color="primary" fontSize="large" className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const Map = ({ zoomLevel, bar }) => {
  const { latitude, longitude, name } = bar || {};

  return bar ? (
    <div className="google-map" style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={{
          lat: parseFloat(latitude),
          lng: parseFloat(longitude),
        }}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={parseFloat(latitude)}
          lng={parseFloat(longitude)}
          text={name}
        />
      </GoogleMapReact>
    </div>
  ) : (
    <div></div>
  );
};

export default Map;
