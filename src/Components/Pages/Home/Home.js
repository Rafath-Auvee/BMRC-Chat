import React from "react";
import { useEffect, useState } from "react";
import Contact from "./Contact.js";
import EventSection from "./EventSection.js";
import FaQs from "./FaQs.js";
import HeroSection from "./HeroSection.js";
import Mentors from "./Mentors.js";
import News from "./News.js";
import TopSlider from "./TopSlider.js";

const Home = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [place, setPlace] = useState("");

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
    });
  }, []);
  console.log("Latitude is :", latitude);
  console.log("Longitude is :", longitude);

  var api_key = "1457682e45754a919897779ad7ebeb78";

  var api_url = "https://api.opencagedata.com/geocode/v1/json";

  var request_url =
    api_url +
    "?" +
    "key=" +
    api_key +
    "&q=" +
    encodeURIComponent(latitude + "," + longitude) +
    "&pretty=1" +
    "&no_annotations=1";

  const successfulLookup = () => {
    // const { latitude, longitude } = position.coords;
    fetch(request_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results[0].components);
        // setPlace(data.results[0])
      });
  };
  // https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=YOUR_API_KEY&signature=YOUR_SIGNATURE

  return (
    <div className="pt-[6%]">
      <TopSlider />
      <HeroSection />
      <Mentors />
      <News />
      <EventSection />
      <FaQs />
      <Contact />
    </div>
  );
};

export default Home;
