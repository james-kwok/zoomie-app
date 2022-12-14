import { Link } from 'react-router-dom';
import LocationCard from '../LocationCard/LocationCard';
import browseIcon from '../../assets/icons/search-icon.png';
import './BrowseList.scss';

const BrowseList = ({ locations, checkins }) => {
  return (
    <>
      <div className="BrowseList">
        <div className="BrowseList__text-container">
          <img
            className="BrowseList__icon"
            src={browseIcon}
            alt="search-icon"
          />
          <h2 className="BrowseList__title">Browse All Parks</h2>
        </div>
        <div className="BrowseList__list">
          {locations.map((location, index) => {
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
      </div>
    </>
  );
};

export default BrowseList;
