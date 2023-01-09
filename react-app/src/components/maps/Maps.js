import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';

const containerStyle = {
  width: '100%',
  height: '400px',
  // position: 'sticky'
  // zindex: '-2'
};
// const center = {
  //     lat: parseInt(store.StoreLocation.Latitude),
  //     lng: parseInt(store.StoreLocation.Longitude),
  //   };
  // let center = {
  //   lat: 51.5322,
  //   lng: 0.0341,
  // };

  const Maps = ({ apiKey }) => {
  const [center, setCenter] = useState({lat: 51.5322,
    lng: 0.0341})
  const userAddress = useSelector(state => state.session.user.address)


  async function getLatLngFromAddress(address) {
  // Replace YOUR_API_KEY with your own API key

  // Make a request to the Google Maps API to convert the address to lat/lng coordinates
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`);
  const data = await response.json();

  // If the request was successful and the response contains a valid result
  if (data.status === "OK") {
    // Get the latitude and longitude coordinates from the response
    const lat = data.results[0].geometry.location.lat;
    const lng = data.results[0].geometry.location.lng;

    // Return the coordinates as an object
    return {lat, lng};
  } else {
    // If the request was unsuccessful, throw an error
    throw new Error(`Error: ${data.status}`);
  }
}
// `${userAddress.street_address}, ${userAddress.city}, ${userAddress.state}`
useEffect(() => {
  getLatLngFromAddress(`${userAddress.street_address}, ${userAddress.city}, ${userAddress.state}`)
    .then(coordinates => {
      console.log(`Latitude: ${coordinates.lat}`);
      console.log(`Longitude: ${coordinates.lng}`);

      return setCenter({lat:coordinates.lat , lng: coordinates.lng})

    })
    .catch(error => {
      console.error(error);
    });
    },[])


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
          >
          <Marker position={center}/>
        </GoogleMap>
      )}
    </>
  );
};

export default React.memo(Maps);
