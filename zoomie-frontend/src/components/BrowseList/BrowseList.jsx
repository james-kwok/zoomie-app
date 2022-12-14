import { Link } from 'react-router-dom';
import LocationCard from '../LocationCard/LocationCard';
import chevronRight from '../../assets/icons/chevron-right.svg';
import './BrowseList.scss';

const BrowseList = ({ locations, checkins }) => {
  const displayLocations = locations.slice(0, 10);
  return (
    <>
      <div className="BrowseList">
        <h2 className="BrowseList__title">Browse Parks</h2>
        <div className="BrowseList__list">
          {displayLocations.map((location, index) => {
            return (
              <Link
                className="BrowseList__list-link"
                to={`/locations/${location.id}`}
                key={index}
              >
                <LocationCard location={location} checkins={checkins} />
              </Link>
            );
          })}
        </div>
        <div className="BrowseList__link">
          <a className="BrowseList__link-text">See All Parks</a>
          <img
            className="BrowseList__chevron"
            src={chevronRight}
            alt="click to see all parks"
          />
        </div>
      </div>
    </>
  );
};

export default BrowseList;
