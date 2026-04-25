// Google trail map
import React, { useState, useEffect } from 'react'
import {createRoot} from 'react-dom/client'
import {APIProvider, Map, useMap} from '@vis.gl/react-google-maps';


function handleLocationError(browserHasGeolocation, infoWindow, pos, map) {
  infoWindow.setPosition(pos);
  if (!browserHasGeolocation) {
    infoWindow.setContent("Error: Your browser doesn't support geolocation.");
    infoWindow.open(map);
  }
}

const MapController = () => {
  const map = useMap()
  const [infoWindow, setInfoWindow] = useState(null);

  // Set info window
  useEffect(() => {
    if (!map) return;
    try {
    setInfoWindow(new google.maps.InfoWindow());
    }
    catch (e) {
      console.log("Error setting map information window", e);
    }
  }, [map]);

  // Get user's location
  useEffect(() => {
    if (!map || !infoWindow) return;

    if (navigator.geolocation) {
      // HTML5 geolocation
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.open(map);
          map.setCenter(pos);
        },
        // If geolocation fails or user denies access to location
        () => handleLocationError(true, infoWindow, map.getCenter(), map)
      );
    } else {
      // If browser doesn't support geolocation
      handleLocationError(false, infoWindow, map.getCenter(), map);
    }
  }, [map, infoWindow]); // run when map changes

}

const TrailMap = () => {
  return (
  <APIProvider
    apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
    onLoad={() => console.log("Maps API has loaded.")}
  >
    <h1>Find your next hike</h1> 
    <div className="h-[500px] w-full bg-gray-200">
      {/* Initialize map */}
      <Map
        defaultZoom={19}
        defaultCenter={ { lat: 40.776411214047606, lng: -73.97551945599395} }
        mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
        onCameraChanged={ (ev) =>
          console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }>
      </Map>
      <MapController/>
    </div>
  </APIProvider>
  )
};

export default TrailMap;