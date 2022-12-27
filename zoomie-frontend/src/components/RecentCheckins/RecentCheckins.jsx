import './RecentCheckins.scss';
import { Link } from 'react-router-dom';

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

  const matchLocations = findRecentCheckins.map(({ location_id }) => {
    return locations.find((location) => {
      return location_id === location.id;
    });
  });

  const displayCheckins = matchLocations.slice(0, 3);

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="RecentCheckins">
            <h1 className="RecentCheckins__title">Recent Check Ins</h1>
            <p className="RecentCheckins__description">
              You are currently checked in at these parks
            </p>

            {displayCheckins.map((item, index) => {
              return (
                <Link
                  className="RecentCheckins__card"
                  to={`/locations/${item.id}`}
                  key={index}
                >
                  <div className="RecentCheckins__card-border">
                    <h1 className="RecentCheckins__card-name">{item.name}</h1>
                    <p className="RecentCheckins__card-address">
                      {item.address}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
};

export default RecentCheckins;
