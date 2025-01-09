import L from 'leaflet';
import { MapPin } from 'lucide-react';

const createCustomIcon = (color: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
  
  return L.divIcon({
    html: svg,
    className: '',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });
};

export const getMarkerIcon = (magnitude: number) => {
  if (magnitude >= 7) return createCustomIcon('#ef4444');
  if (magnitude >= 5) return createCustomIcon('#f97316');
  if (magnitude >= 3) return createCustomIcon('#facc15');
  return createCustomIcon('#22c55e');
};