import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const location = useLocation();
  const profile = location.state || {}; // Ensure profile data is fetched
  const { address = "New York", name = "Unknown User", image = "", summary = "No summary available." } = profile;

  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
        );
        const data = await response.json();
        if (data.length > 0) {
          setCoordinates([data[0].lat, data[0].lon]);
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    fetchCoordinates();
  }, [address]);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-6">
      {/* Profile Info (Aligned as a Profile, Not a Card) */}
      <div className="flex flex-col items-center text-center mb-6">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-300 mb-4"
          />
        )}
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-600 mt-2 text-lg w-3/4">{summary}</p>
      </div>

      {/* Map Section */}
      <h2 className="text-xl font-bold mb-4">Location for: {address}</h2>
      {coordinates ? (
        <MapContainer center={coordinates} zoom={13} style={{ height: "500px", width: "80%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={coordinates}>
            <Popup>{address}</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default MapComponent;
