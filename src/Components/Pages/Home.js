import React from "react";
import { useEffect, useState } from "react";
import Location from "./Location.js";

const Home = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 11,
  };

  // navigator.geolocation.getCurrentPosition(function (position) {
  //   const lati = position.coords.latitude;
  //   const long = position.coords.longitude;
  //   setLatitude(lati);
  //   setLongitude(long);
  //   // return lati, long
  //   console.log("Latitude is :", position.coords.latitude);
  //   console.log("Longitude is :", position.coords.longitude);
  // });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lati = position.coords.latitude;
      const long = position.coords.longitude;
      setLatitude(lati);
      setLongitude(long);
      // return lati, long
    });
  }, []);
  // console.log(latitude)
  console.log("Latitude is :", latitude);
  console.log("Longitude is :", longitude);

  // https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=YOUR_API_KEY&signature=YOUR_SIGNATURE

  return (
    <div>
      {/* <Location/> */}
      <div className="text-center">
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
        <Location/>
      </div>
    </div>
  );
};

export default Home;
