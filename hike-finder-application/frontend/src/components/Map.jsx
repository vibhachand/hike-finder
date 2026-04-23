// Google Map + markers
import React from 'react'
import {createRoot} from 'react-dom/client'
import {APIProvider, Map} from '@vis.gl/react-google-maps';

const TrailMap = () => (
  <APIProvider
    apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
    onLoad={() => console.log("Maps API has loaded.")}
  >
    <div class="h-[500px] w-full bg-gray-200">
      <Map
        defaultZoom={13}
        defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
        onCameraChanged={ (ev) =>
          console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }>
      </Map>
    </div>
    <h1>Trail Map</h1>
  </APIProvider>
);

export default TrailMap;
