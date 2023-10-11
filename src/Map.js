import React from 'react';
import { GoogleMap, Marker,LoadScript  } from '@react-google-maps/api';


const Map = ({ center, markerPosition }) => {

  return (
    <LoadScript googleMapsApiKey="AIzaSyAAkti7nBx4hj2Oyf-RDoNsbGtH2lfp63M">
      <GoogleMap
        mapContainerStyle={{ height: '1000px', width: '100%' }}
        zoom={10}
        center={center}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
