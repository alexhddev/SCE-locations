// Map.tsx
import { LatLngExpression } from "leaflet";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

const mapCenter: LatLngExpression = [45,25]

export default function Map() {
  return (
    <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          This is a popup
        </Popup>
      </Marker> */}
    </MapContainer>
  );
}