import { Link } from 'react-router-dom';
import * as geolib from 'geolib';
import LocationCardXL from '../LocationCardXL/LocationCardXL';
import './NearbyList.scss';

const NearbyList = ({ locations, checkins, coords }) => {
  const sortLocations = geolib
    .orderByDistance(
      { latitude: coords.latitude, longitude: coords.longitude },
      locations
    )
    .slice(0, 10);

  return (
    <>
      <div className="NearbyList">
        <div className="NearbyList__text-container">
          <h1 className="NearbyList__title">Parks Near You</h1>
        </div>
        <div className="NearbyList__gallery">
          {sortLocations.map((location, index) => {
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
