import './LocationDetails.scss';
import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect } from 'react';

mapboxgl.accessToken = process.env.REACT_APP_MB_ACCESS;

const LocationDetails = ({ location, checkins, lng, lat }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: 15,
    });
    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.current);
  });

  return (
    <>
      <div className="LocationDetails">
        <div className="LocationDetails__hero">
          <img
            className="LocationDetails__hero-image"
            src={location.img}
            alt={location.name}
          />
        </div>
        <div className="LocationDetails__info">
          <div className="LocationDetails__location">
            <div className="LocationDetails__text-container">
              <h3 className="LocationDetails__title">Location Info</h3>
              <h1 className="LocationDetails__info-title">{location.name}</h1>
              <h2 className="LocationDetails__address">{location.address}</h2>
            </div>
            <div className="LocationDetails__category-label">
              <p className="LocationDetails__category-text">Off-leash</p>
            </div>
            <div className="LocationDetails__button-wrapper">
              <button className="LocationDetails__button">
                <span className="LocationDetails__button-text">Check In</span>
              </button>
            </div>
          </div>
        </div>
        <div className="LocationDetails__map">
          <h3 className="LocationDetails__title">Location Map</h3>
          <div className="LocationDetails__map-info">
            {/* Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} */}
          </div>
          <div ref={mapContainer} className="LocationDetails__map-container" />
        </div>
        <div className="LocationDetails__attendance">
          <h2 className="LocationDetails__attendance-title">Who's Going?</h2>
          <div className="LocationDetails__gallery">
            {checkins.map((item, index) => {
              return (
                <div className="LocationDetails__profile" key={index}>
                  <img
                    className="LocationDetails__avatar"
                    src={item.img}
                    alt={item.name}
                  />
                  <p className="LocationDetails__dog-name">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationDetails;
