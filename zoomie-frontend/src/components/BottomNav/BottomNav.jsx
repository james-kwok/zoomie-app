import { Link } from 'react-router-dom';
import './BottomNav.scss';
import homeIcon from '../../assets/icons/home-icon.svg';
import profileIcon from '../../assets/icons/profile-icon.svg';

const BottomNav = ({ isLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? (
        <div className="BottomNav">
          <Link to="/" className="BottomNav__left">
            <img
              className="BottomNav__home-icon"
              src={homeIcon}
              alt="home-icon"
            />
          </Link>
          <Link to="/profile" className="BottomNav__right">
            <img
              className="BottomNav__profile-icon"
              src={profileIcon}
              alt="profile-icon"
            />
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default BottomNav;
