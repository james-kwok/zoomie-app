import './LocationCardXL.scss';

const LocationCardXL = ({ location, dogs, remainingDogs }) => {
  return (
    <>
      <div className="LocationCardXL">
        <div className="LocationCardXL__card">
          <div className="LocationCardXL__gradient">
            <img
              className="LocationCardXL__image"
              src={location.img}
              alt={location.name}
            />
          </div>
          <h1 className="LocationCardXL__title">{location.name}</h1>
          <p className="LocationCardXL__text">{location.address}</p>
          <div className="LocationCardXL__gallery">
            {dogs.map((dog, index) => {
              return (
                <img
                  className="LocationCardXL__avatar"
                  key={index}
                  src={dog.img}
                  alt={dog.name}
                />
              );
            })}
            <p className="LocationCardXL__remaining-dogs">
              ...+ {remainingDogs.length} more
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationCardXL;
