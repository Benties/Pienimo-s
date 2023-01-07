import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '400px',
};
// const center = {
//     lat: parseInt(store.StoreLocation.Latitude),
//     lng: parseInt(store.StoreLocation.Longitude),
//   };
const center = {
  lat: 51.5322,
  lng: 0.0341,
};

const Maps = ({ apiKey }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        />
      )}
    </>
  );
};

export default React.memo(Maps);
