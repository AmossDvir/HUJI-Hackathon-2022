import React from "react";

const Map = ({ locationName }) => {
  return (
    <div id="map">
      <iframe
        width="800"
        height="600"
        style={{ border: 0 }}
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCXKKme3jzfk4W1voYj23_SUZOnqDHWoeo
  &q=${locationName}`}
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default Map;
