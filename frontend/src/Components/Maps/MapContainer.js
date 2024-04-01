import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import SearchBox from './MapSearch';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapView = ({ handleSearchSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [markerPosition, setMarkerPosition] = useState(null);
  const [userLocation, setUserLocation] = useState([0, 0]);
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (item) => {
    console.log(item)
    const { lat, lon } = item;
    setSearchResult(item)
    setMarkerPosition([lat, lon]);
    setUserLocation([lat, lon]);
    if (handleSearchSelect) {
      handleSearchSelect(item)
    }

  }
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
  const ChangeMapView = ({ center }) => {
    const map = useMap();
    map.setView(center);
    return null;
  };


  return (
    <div className='relative'>
      <MapContainer center={userLocation} zoom={13} scrollWheelZoom={true} style={{ width: "100%", height: "50vh" }}>
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
      <div className=' absolute top-1 left-20' style={{ zIndex: 99999 }} >
        <SearchBox handleSearchSelect={handleSearch} searchResult={searchResult} />
      </div>
    </div >
  );
};

export default MapView;
