import './LocationCardXL.scss';

const LocationCardXL = ({ location, checkins }) => {
  const findCheckins = checkins.filter((checkin) => {
    return checkin.location_id === location.id;
  });

  const checkinList = findCheckins.filter((item) => {
    return item.status > 0;
  });

  const firstThreeCheckins = checkinList.slice(0, 3);

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
            {firstThreeCheckins.map((item, index) => {
              return (
                <img
                  className="LocationCardXL__avatar"
                  key={index}
                  src={item.img}
                  alt={item.name}
                />
              );
            })}
            <p className="LocationCardXL__remaining-dogs">
              {checkinList.length} Attending
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationCardXL;
