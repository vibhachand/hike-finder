// Google Map + markers
import React from 'react'
import {createRoot} from 'react-dom/client'
import {APIProvider} from '@visualViewport.gl/react-google-maps'
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

const Map = () => (
  <APIProvider
    apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
    onLoad={() => console.log("Maps API has loaded.")}
  >
    <h1>Trail Map</h1>
  </APIProvider>
);

export default Map;