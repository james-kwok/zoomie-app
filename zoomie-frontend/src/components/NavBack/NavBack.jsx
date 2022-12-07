import { Link } from 'react-router-dom';
import './NavBack.scss';
import backIcon from '../../assets/icons/back-arrow.svg'
import placeholder from '../../assets/images/placeholder-avatar.png';
import dropdown from '../../assets/icons/dropdown-arrow.svg';

const NavBack = () => {
  return (
    <>
      <div className="NavBack">
        <Link to="/" className="NavBack__logo-container">
          <img className="NavBack__back-icon" src={backIcon} alt="back-to-home" />
        </Link>
        <div className="NavBack__profile-container">
          <p className="NavBack__profile-text">Charlie</p>
          <img
            className="NavBack__profile-pic"
            src={placeholder}
            alt="profile-picture"
          />
          <img
            className="NavBack__profile-icon"
            src={dropdown}
            alt="select-another-dog-profile"
          />
        </div>
      </div>
    </>
  );
};

export default NavBack;
