import { useState, useEffect } from "react";

const FunctionalPiece = () => {
  function success(pos) {
    var crd = pos.coords;
    const nasaApi = `https://api.nasa.gov/planetary/earth/assets?lon=${crd.longitude}&lat=${crd.latitude}&date=2021-07-18&&dim=0.10&api_key=WnsBhhCC3hhFhn8SKf08eZK9awRUhwXWH4FUwWE9`;

    const nasaCall = async () => {
      const response = await fetch(nasaApi);
      const json = await response.json();
      const img = document.createElement("img");
      const body = document.querySelector("body");
      console.log(json);
      img.src = json.url;
      body.append(img);
    };

    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=9afc6a761613d9a2b34a1a0a096265f9&units=imperial`;

    const weatherCall = async () => {
      const response = await fetch(weatherApi);
      const json = await response.json();
      const p = document.createElement("p");
      const body = document.querySelector("body");
      p.innerHTML = json.main.temp;
      body.append(p);
    };

    const ticketApi = `https://app.ticketmaster.com/discovery/v2/venues?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&lat${crd.latitude}&long${crd.longitude}`;

    const ticketMaster = async () => {
      const response = await fetch(ticketApi);
      const json = await response.json();
      console.log(json._embedded.venues);
      json._embedded.venues.forEach((element) => {
        console.log(element.name);
        let body = document.querySelector("body");
        let ul = document.createElement("ul");
        let listItems = document.createElement("li");
        ul.className = "list-group";
        listItems.className = "list-group-item";
        listItems.innerHTML = element.name;
        body.append(ul);
        ul.appendChild(listItems);
      });
    };
    ticketMaster();
    nasaCall();
    weatherCall();
  }
  const location = navigator.geolocation.getCurrentPosition(success);

  return (
    <div>
      <h1>24 Hour Project!</h1>
      <p className="temp">Temperature: </p>
    </div>
  );
};

export default FunctionalPiece;
