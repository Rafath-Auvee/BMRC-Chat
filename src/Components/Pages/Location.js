import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};



const Location = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const center = {
    lat: latitude,
    lng: longitude,
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lati = position.coords.latitude;
      const long = position.coords.longitude;
      setLatitude(lati);
      setLongitude(long);
      // return lati, long
    });
  }, []);

  return (
    <div className="flex justify-center">
      <LoadScript googleMapsApiKey="AIzaSyDpFSETgCb8_yS1Xcv2uKeLZmv_GPqRuXk">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Location;
