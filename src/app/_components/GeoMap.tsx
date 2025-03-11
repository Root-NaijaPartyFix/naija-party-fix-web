// "use client";

// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMapEvents,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { useState } from "react";
// import L from "leaflet";

// // Custom icon for the marker
// const customIcon = new L.Icon({
//   iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png",
//   iconSize: [32, 50],
//   iconAnchor: [16, 32],
// });

// const DEFAULT_POSITION: [number, number] = [9.082, 8.6753]; // Nigeria's latitude & longitude

// export default function MapComponent() {
//   const [markers, setMarkers] = useState<{ lat: number; lng: number }[]>([
//     { lat: DEFAULT_POSITION[0], lng: DEFAULT_POSITION[1] },
//   ]);

//   function MapClickHandler() {
//     useMapEvents({
//       click(e) {
//         setMarkers([...markers, { lat: e.latlng.lat, lng: e.latlng.lng }]);
//       },
//     });
//     return null;
//   }

//   return (
//     <MapContainer
//       center={[9.082, 8.6753]}
//       zoom={6}
//       style={{ height: "500px", width: "100%" }}
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <MapClickHandler />
//       {markers.map((marker, index) => (
//         <Marker
//           key={index}
//           position={[marker.lat, marker.lng]}
//           icon={customIcon}
//         >
//           <Popup>
//             Latitude: {marker.lat}, Longitude: {marker.lng}
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// }
