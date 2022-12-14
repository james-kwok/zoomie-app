import { Link } from 'react-router-dom';
import pinIcon from '../../assets/icons/pin-icon.png';
import LocationCardXL from '../LocationCardXL/LocationCardXL';
import './NearbyList.scss';

const NearbyList = ({ locations, checkins }) => {
  // will remove this array method when geolocation feature is developed
  const displayLocations = locations.slice(4, 10);
  return (
    <>
      <div className="NearbyList">
        <div className="NearbyList__text-container">
          <img className="NearbyList__icon" src={pinIcon} alt="location-icon" />
          <h2 className="NearbyList__title">Check-in to nearby parks</h2>
        </div>
        <div className="NearbyList__gallery">
          {displayLocations.map((location, index) => {
            return (
              <Link to={`/locations/${location.id}`} key={index}>
                <LocationCardXL location={location} checkins={checkins} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NearbyList;
