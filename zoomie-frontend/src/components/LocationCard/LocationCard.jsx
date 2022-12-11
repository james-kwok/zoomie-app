import './LocationCard.scss';
import chevronRight from '../../assets/icons/chevron-right.svg';

const LocationCard = ({ location, checkins }) => {
  const findCheckins = checkins.filter((checkin) => {
    return checkin.location_id === location.id;
  });
  const firstThreeCheckins = findCheckins.slice(0, 3);
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
            {firstThreeCheckins.map((item, index) => {
              return (
                <img
                  className="LocationCard__avatar"
                  key={index}
                  src={item.img}
                  alt={item.name}
                />
              );
            })}
            <p className="LocationCard__remaining-dogs">
              {findCheckins.length} Attending
            </p>
          </div>
        </div>
        <img
          className="LocationCard__chevron"
          src={chevronRight}
          alt="click to view details"
        />
      </div>
    </>
  );
};

export default LocationCard;
