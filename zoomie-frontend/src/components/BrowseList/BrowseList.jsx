import { Link } from 'react-router-dom';
import './BrowseList.scss';
import LocationCard from '../LocationCard/LocationCard';
import chevronRight from '../../assets/icons/chevron-right.svg';

const BrowseList = ({ locations, dogs }) => {
  const displayLocations = locations.slice(0, 5);
  const displayDogs = dogs.slice(0, 3);
  const remainingDogs = dogs.slice(3);
  return (
    <>
      <div className="BrowseList">
        <h2 className="BrowseList__title">Browse Parks</h2>
        <div className="BrowseList__list">
          {displayLocations.map((location, index) => {
            return (
              <Link className="BrowseList__list-link" to={`/locations/${location.location_id}`} key={index}>
                <LocationCard
                  location={location}
                  dogs={displayDogs}
                  remainingDogs={remainingDogs}
                />
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
