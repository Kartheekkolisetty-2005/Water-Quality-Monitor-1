import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Water Quality Map</h3>
      <MapContainer
        center={[17.385, 78.4867]}
        zoom={10}
        style={{ height: "300px" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[17.385, 78.4867]}>
          <Popup>Hyderabad</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapView;
