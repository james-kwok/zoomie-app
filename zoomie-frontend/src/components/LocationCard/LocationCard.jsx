import './LocationCard.scss';
import chevronRight from '../../assets/icons/chevron-right.svg';

const LocationCard = ({ location, dogs, remainingDogs }) => {
  return (
    <>
      <div className="LocationCard">
        <img
          className="LocationCard__image"
          src={location.img}
          alt={location.name}
        />
        <div className="LocationCard__container">
          <h3 className="LocationCard__title">{location.name}</h3>
          <p className="LocationCard__text">{location.address}</p>

          <div className="LocationCard__gallery">
            {dogs.map((dog, index) => {
              return (
                <img
                  className="LocationCard__avatar"
                  key={index}
                  src={dog.img}
                  alt={dog.name}
                />
              );
            })}
            <p className="LocationCard__remaining-dogs">
              ...+ {remainingDogs.length} more
            </p>
          </div>
        </div>
        <img className="LocationCard__chevron" src={chevronRight} alt="click to view details" />
      </div>
    </>
  );
};

export default LocationCard;
