import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';

const containerStyle = {
  PointerEvent: 'none',
  width: '100%',
  height: '400px',
  zIndex: -1,
};


  const Maps = ({ apiKey }) => {

  const [center, setCenter] = useState({lat: 51.5322, lng: 0.0341})
  const [markers, setMarkers] = useState([])

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

const generateMarkers = async (originalCoord, miles) => {
  const R = 3959; // radius of Earth in miles
  let res = []
  for (let i = 0; i < 5; i++) {
    const bearing = Math.random() * 360;
    const lat = originalCoord[0] + (miles / R) * (180 / Math.PI) * Math.cos(bearing);
    const lng = originalCoord[1] + (miles / R) * (180 / Math.PI) * Math.sin(bearing);
    res.push({lat:lat,lng:lng})
  }
  setMarkers(res)
  return res
}
// `${userAddress.street_address}, ${userAddress.city}, ${userAddress.state}`
useEffect(() => {
  getLatLngFromAddress(`${userAddress.street_address}, ${userAddress.city}, ${userAddress.state}`)
    .then(coordinates => {
      console.log(`Latitude: ${coordinates.lat}`);
      console.log(`Longitude: ${coordinates.lng}`);
      console.log('this is markerrrrrrrrrrr',generateMarkers([coordinates.lat,coordinates.lng], 5))
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
            options={{disableDefaultUI: true}}
          >
          {markers.map((marker =>
            <Marker
            position={marker}
            icon={{
              path: "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
              fillColor:'rgb(15,121,168)',
              fillOpacity:1,
              scale:.6
            }}/>
          ))}
        </GoogleMap>
      )}
    </>
  );
};

export default React.memo(Maps);
