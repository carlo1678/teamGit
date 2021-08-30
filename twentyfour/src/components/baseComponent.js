import { useState, useEffect } from "react";

const FunctionalPiece = () => {
  const [pos, setPos] = useState({ lat: "", long: "" });
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoords);
    } else {
      alert("GeoLocation not enabled");
    }
  };

  const getCoords = (pos) => {
    console.log(pos);
    setPos({
      lat: pos.coords.latitude,
      long: pos.coords.longitude,
    });
  };

  return (
    <div>
      <button>Click me</button>
      <p></p>
      <p></p>
    </div>
  );
};

export default FunctionalPiece;
