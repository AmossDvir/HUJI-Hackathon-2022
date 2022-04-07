import React from "react";

const Map = () => {
  return (
    <div id="map">
      <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCXKKme3jzfk4W1voYj23_SUZOnqDHWoeo
  &q=Givat+Ram"
      ></iframe>
    </div>
  );
};

export default Map;
