import './BrowseCard.scss';
import { Link } from 'react-router-dom';
import parkLandscape from '../../assets/illustrations/landscape-illustration.jpeg';

const BrowseCard = () => {
  return (
    <>
      <Link to="/browse">
        <div className="BrowseCard">
          <div className="BrowseCard__card">
            <img
              className="BrowseCard__card-image"
              src={parkLandscape}
              alt="park-landscape"
            />
            <div className="BrowseCard__card-container">
              <h1 className="BrowseCard__card-title">Browse All Parks</h1>
              <p className="BrowseCard__card-text">
                Click here to see the full list of parks
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BrowseCard;
