import axios from 'axios';
import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LocationDetails.scss';

mapboxgl.accessToken = process.env.REACT_APP_MB_ACCESS;

const LocationDetails = ({ location, checkins, lng, lat, isLoggedIn }) => {
  const navigate = useNavigate();
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [error, setError] = useState('');
  const [failedAuth, setFailedAuth] = useState(false);
  const authToken = sessionStorage.getItem('authToken');

  useEffect(() => {
    if (!authToken) {
      setFailedAuth(true);
    }
  }, [authToken]);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: 15,
    });
    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.current);
  });

  const handleButton = () => {
    navigate('/welcome');
  };

  const postCheckIn = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        'http://localhost:8080/checkins',
        {
          location_id: location.id,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      if (!res.data) {
        setError('Unable to post check-in.');
        return;
      }
      navigate('/locations');
    } catch (error) {
      setError('Something went wrong, try again later.');
      console.log(error);
    }
  };

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
              {isLoggedIn ? (
                <button
                  onClick={postCheckIn}
                  type="submit"
                  className="LocationDetails__button"
                >
                  <span className="LocationDetails__button-text">Check In</span>
                </button>
              ) : (
                <button
                  onClick={handleButton}
                  className="LocationDetails__button"
                >
                  <span className="LocationDetails__button-text">
                    Log In To Check In
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="LocationDetails__map">
          <h3 className="LocationDetails__title">Location Map</h3>
          <div className="LocationDetails__map-info"></div>
          <div ref={mapContainer} className="LocationDetails__map-container" />
        </div>
        <div className="LocationDetails__attendance">
          <h2 className="LocationDetails__attendance-title">Who's Going?</h2>
          <div className="LocationDetails__gallery">
            {checkins.map((item, index) => {
              return (
                <Link
                  to={`/dogs/${item.id}`}
                  key={index}
                  className="LocationDetails__profile"
                >
                  <img
                    className="LocationDetails__avatar"
                    src={item.img}
                    alt={item.name}
                  />
                  <p className="LocationDetails__dog-name">{item.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationDetails;
