import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { Earthquake } from '../types/earthquake';
import { getMarkerIcon } from './CustomMarker';

interface MapProps {
  earthquakes: Earthquake[];
}

export default function Map({ earthquakes }: MapProps) {
  return (
    <div className="relative z-60">
      <MapContainer
        center={[9.145, 40.489]}
        zoom={6}
        className="w-full h-[80vh] rounded-lg shadow-xl border-4 border-white dark:border-gray-800"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {earthquakes.map((quake) => (
          <Marker
            key={quake.id}
            position={[quake.geometry.coordinates[1], quake.geometry.coordinates[0]]}
            icon={getMarkerIcon(quake.properties.mag)}
          >
            <Popup className="custom-popup">
              <div className="p-2">
                <h3 className="font-bold text-gray-900">{quake.properties.title}</h3>
                <p className="text-gray-700">Magnitude: {quake.properties.mag}</p>
                <p className="text-gray-700">Depth: {quake.geometry.coordinates[2]} km</p>
                <a
                  href={quake.properties.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline mt-2 inline-block"
                >
                  More info →
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}