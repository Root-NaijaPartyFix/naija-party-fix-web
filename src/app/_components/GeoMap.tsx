"use client";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { type LatLng } from "leaflet";
import { Icon } from "leaflet";

const ClickableMap: React.FC = () => {
  const [position, setPosition] = useState<LatLng | null>(null);

  const MapClickHandler: React.FC = () => {
    useMapEvents({
      click: (e) => {
        setPosition(e.latlng);
        console.log("Clicked at:", e.latlng);
      },
    });
    return null;
  };

  const customIcon = new Icon({
    iconUrl: "/images/Home/location.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -22],
  });

  return (
    <MapContainer
      center={[9.082, 8.6753]}
      zoom={5}
      style={{ height: "500px", width: "100%", zIndex: 1, overflowY: "auto" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapClickHandler />
      {position && (
        <p>
          Clicked at: {position.lat.toFixed(6)}, {position.lng.toFixed(6)}
        </p>
      )}
      <Marker position={[9.082, 8.6753]} icon={customIcon}>
        <Popup>📍 You are here: Nigeria</Popup>{" "}
      </Marker>
    </MapContainer>
  );
};

export default ClickableMap;
