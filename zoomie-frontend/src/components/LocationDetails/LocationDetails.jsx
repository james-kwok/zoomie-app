import './LocationDetails.scss';

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
              <h1 className="LocationDetails__info-title">{location.name}</h1>
              <h2 className="LocationDetails__address">{location.address}</h2>
            </div>
            <div className="LocationDetails__category-label">
              <p className="LocationDetails__category-text">Off-leash</p>
            </div>
            <button className="LocationDetails__button">
              <span className="LocationDetails__button-text">Check In</span>
            </button>
          </div>
          <div className="LocationDetails__map">
            <img className="LocationDetails__map-placeholder" src="" alt="" />
          </div>
        </div>
        <div className="LocationDetails__attendance">
          <h2 className="LocationDetails__attendance-title">Who's Going?</h2>
          <div className="LocationDetails__gallery">
          {dog.map((item, index) => {
              return (
                <img
                  className="LocationDetails__avatar"
                  key={index}
                  src={item.img}
                  alt={item.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationDetails;
