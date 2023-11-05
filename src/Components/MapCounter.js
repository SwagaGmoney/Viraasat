import React, { useEffect } from 'react';

const MapCounter = () => {
  const mapStyles = {
    width: '50%',
    height: '400px'
  };

  const defaultCenter = {
    lat: 29.76071548461914,
    lng: -95.36980438232422
  };

  useEffect(() => {
    // Dynamically create initMap in the global scope
    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("gmp-map"), {
        zoom: 14,
        center: defaultCenter,
        fullscreenControl: false,
        zoomControl: true,
        streetViewControl: false
      });

      new window.google.maps.Marker({
        position: defaultCenter,
        map,
        title: "My location"
      });
    };

    const loadGoogleMapScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAjKRxF9Gta4Ox0hLjjCvjuAtkVtoyXj_4&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    if (!window.google) {
      loadGoogleMapScript();
    } else {
      window.initMap(); // Call initMap directly if the Google Maps API is already loaded
    }
  }, []); // Empty dependency array ensures this code runs once after component mount

  return (
    <div id="gmp-map" style={mapStyles} className="relative bg-gray-300 shadow-xl rounded-2xl lg:top-[-38em] lg:mb-[-30em] xsm:left-[5em] sm:left-40 xsm:top-[5em] xl:top-[-32em] xl:left-[42em] md:left-[10em] lg:left-[40em] "></div>
  );
};

export default MapCounter;
