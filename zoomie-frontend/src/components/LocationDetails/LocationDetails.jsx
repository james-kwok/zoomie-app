import './LocationDetails.scss';
import mapPlaceholder from '../../assets/images/placeholder-map.png';

const LocationDetails = ({ location, dog }) => {
  return (
    <>
      <div className="LocationDetails">
        <div className="LocationDetails__hero">
          <img
            className="LocationDetails__hero-image"
            src={location.img}
            alt={dog.name}
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
          <img
            className="LocationDetails__map-placeholder"
            src={mapPlaceholder}
            alt="location-map"
          />
        </div>
        <div className="LocationDetails__attendance">
          <h2 className="LocationDetails__attendance-title">Who's Going?</h2>
          <div className="LocationDetails__gallery">
            {dog.map((item, index) => {
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
