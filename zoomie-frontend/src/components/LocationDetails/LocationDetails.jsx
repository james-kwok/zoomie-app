import axios from 'axios';
import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import locationIcon from '../../assets/icons/location-icon.png';
import tagIcon from '../../assets/icons/tag-icon-white.png';
import routeIcon from '../../assets/icons/route-icon.png';
import bonesIcon from '../../assets/icons/bones.png';
import infoIcon from '../../assets/icons/info-icon.png'
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

  // mapbox API for map feature, will explore more of their features in the future
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
              <div className="LocationDetails__icon-container">
                <img
                  className="LocationDetails__icon"
                  src={locationIcon}
                  alt="location-icon"
                />
                <h2 className="LocationDetails__title">Park Info</h2>
              </div>

              <h1 className="LocationDetails__info-title">{location.name}</h1>
              <h2 className="LocationDetails__address">{location.address}</h2>
            </div>
            <div className="LocationDetails__category-container">
              <div className="LocationDetails__category-label">
                <img
                  className="LocationDetails__category-tag"
                  src={tagIcon}
                  alt="tag-icon"
                />
                <p className="LocationDetails__category-text">Off-leash</p>
              </div>
              <div className="LocationDetails__category-label--alt">
                <img
                  className="LocationDetails__category-tag"
                  src={tagIcon}
                  alt="tag-icon"
                />
                <p className="LocationDetails__category-text">Fenced</p>
              </div>
            </div>
            {/* conditional button for guest vs logged in state */}
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
        <div className="LocationDetails__attendance">
          <div className="LocationDetails__icon-container">
            <img
              className="LocationDetails__icon"
              src={bonesIcon}
              alt="bones-icon"
            />
            <h2 className="LocationDetails__attendance-title">Who's Going?</h2>
          </div>
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
        <div className="LocationDetails__about">
          <div className="LocationDetails__about-container">
            <div className="LocationDetails__icon-container">
              <img
                className="LocationDetails__icon"
                src={infoIcon}
                alt="info-icon"
              />
              <h2 className="LocationDetails__about-title">
                Park Details
              </h2>
            </div>
            <p className="LocationDetails__about-text">
              {location.description}
            </p>
          </div>
        </div>
        <div className="LocationDetails__map">
          <div className="LocationDetails__icon-container">
            <img
              className="LocationDetails__icon"
              src={routeIcon}
              alt="route-icon"
            />
            <h2 className="LocationDetails__title">Location Map</h2>
          </div>
          <div className="LocationDetails__map-info"></div>
          <div ref={mapContainer} className="LocationDetails__map-container" />
        </div>
      </div>
    </>
  );
};

export default LocationDetails;
