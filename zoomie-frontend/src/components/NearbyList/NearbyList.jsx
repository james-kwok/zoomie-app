import './NearbyList.scss';
import LocationCardXL from '../LocationCardXL/LocationCardXL';
import pinIcon from '../../assets/icons/pin-icon.svg';

const NearbyList = () => {
  return (
    <>
      <div className="NearbyList">
        <div className="NearbyList__text-container">
          <img className="NearbyList__icon" src={pinIcon} alt="location icon" />
          <h2 className="NearbyList__title">Check-in to nearby parks</h2>
        </div>
        <div className="NearbyList__gallery">
          <LocationCardXL />
        </div>
      </div>
    </>
  );
};

export default NearbyList;
