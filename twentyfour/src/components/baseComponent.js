import { useState, useEffect } from "react";

const FunctionalPiece = () => {
  function success(pos) {
    var crd = pos.coords;
    console.log(crd.latitude);
    const nasaApi = `https://api.nasa.gov/planetary/earth/assets?lon=${crd.longitude}&lat=${crd.latitude}&date=2018-01-01&&dim=0.10&api_key=WnsBhhCC3hhFhn8SKf08eZK9awRUhwXWH4FUwWE9`;

    const nasaCall = async () => {
      const response = await fetch(nasaApi);
      const json = await response.json();
      const img = document.createElement("img");
      const body = document.querySelector("body");
      console.log(json);
      img.src = json.url;
      body.append(img);
    };

    nasaCall();
  }
  const location = navigator.geolocation.getCurrentPosition(success);

  // const [pos, setPos] = useState({ lat: "", long: "" });

  // const getLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(getCoords);
  //   } else {
  //     alert("GeoLocation not enabled");
  //   }
  // };

  // const getCoords = (pos) => {
  //   setPos({
  //     lat: pos.coords.latitude,
  //     long: pos.coords.longitude,
  //   });
  // };
  // getLocation();
  // const nasaApi = `https://api.nasa.gov/planetary/earth/assets?lon=${position.coords.longitude}&lat=${pos.lat}&date=2018-01-01&&dim=0.10&api_key=WnsBhhCC3hhFhn8SKf08eZK9awRUhwXWH4FUwWE9`;

  // const nasaCall = async () => {
  //   const response = await fetch(nasaApi);
  //   const json = await response.json();
  //   const img = document.createElement("img");
  //   const body = document.querySelector("body");
  //   console.log(json);
  //   img.src = json.url;
  //   body.append(img);
  // };

  // nasaCall();
  return <div></div>;
};

export default FunctionalPiece;
