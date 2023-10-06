import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  // const pathCoordinates = [
  //   [27.683813088728616, 85.30663842576038],
  //   [27.69224038818165, 85.27883669719405],
  // ];

  return (
    <MapContainer
      center={[27.683813088728616, 85.30663842576038]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <Polyline positions={pathCoordinates} color="blue" /> */}
    </MapContainer>
  );
};

export default MapComponent;
