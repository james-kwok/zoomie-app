import './RecentCheckins.scss';

const RecentCheckins = ({
  locations,
  checkins,
  displayProfile,
  isLoggedIn,
}) => {
  const recentCheckins = checkins.filter((checkin) => {
    return checkin.id === displayProfile.id;
  });
  const findRecentCheckins = recentCheckins.filter((item) => {
    return item.status > 0;
  });

  const findLocations = findRecentCheckins.map(({ location_id }) => {
    return locations.find((location) => {
      return location_id === location.id;
    });
  });

  console.log(findLocations);

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="RecentCheckins">
            <h1 className="RecentCheckins__title">Recent Check Ins</h1>
            {findLocations.map((item, index) => {
              return (
                <div className="RecentCheckins__card" key={index}>
                  <h1 className="RecentCheckins__card-name">{item.name}</h1>
                  <p className="RecentCheckins__card-address">{item.address}</p>
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
};

export default RecentCheckins;
