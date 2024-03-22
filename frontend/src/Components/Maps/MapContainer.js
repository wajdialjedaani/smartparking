import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [markerPosition, setMarkerPosition] = useState(null);
  const [userLocation, setUserLocation] = useState([0, 0]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          setMarkerPosition([latitude, longitude]);
        },
        (error) => {
          console.error('Error getting user location:', error);
          setUserLocation([51.505, -0.09]);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setUserLocation([51.505, -0.09]);
    }
  }, []);

  const handleSearch = async () => {
    if (searchQuery.trim() === '') return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}&addressdetails=1&limit=1`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setMarkerPosition([lat, lon]);
        setUserLocation([lat, lon]);
      }
    } catch (error) {
      console.error('Error fetching geolocation:', error);
    }
  };

  const ChangeMapView = ({ center }) => {
    const map = useMap();
    map.setView(center);
    return null;
  };

  return (
    <div>
      <div className='p-2 flex justify-center gap-4'>
        <input
          type="text"
          className='border p-2 w-1/2'
          placeholder="Enter address..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch} className='bg-blue-600 p-2 rounded text-white shadow'>Search</button>
      </div>
      <div className='flex justify-center'>

        <MapContainer center={userLocation} zoom={13} scrollWheelZoom={true} style={{ width: "50%", height: "50vh" }}>
          <ChangeMapView center={userLocation} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markerPosition && (
            <Marker position={markerPosition} >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>

    </div>
  );
};

export default MapView;
