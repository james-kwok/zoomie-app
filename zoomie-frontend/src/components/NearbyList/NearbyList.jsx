import './NearbyList.scss';
import LocationCardXL from '../LocationCardXL/LocationCardXL';
import pinIcon from '../../assets/icons/pin-icon.svg';

const NearbyList = ({ locations, dogs }) => {
  const displayLocations = locations.slice(0, 10);
  const displayDogs = dogs.slice(0, 3);
  const remainingDogs = dogs.slice(3);
  return (
    <>
      <div className="NearbyList">
        <div className="NearbyList__text-container">
          <img className="NearbyList__icon" src={pinIcon} alt="location icon" />
          <h2 className="NearbyList__title">Check-in to nearby parks</h2>
        </div>
        <div className="NearbyList__gallery">
          {displayLocations.map((location, index) => {
            return (
              <LocationCardXL
                key={index}
                location={location}
                dogs={displayDogs}
                remainingDogs={remainingDogs}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NearbyList;
