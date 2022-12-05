import './Nav.scss';
import logo from '../../assets/logos/zoomie-logo.svg';
import logoText from '../../assets/logos/zoomie-text.svg';
import placeholder from '../../assets/images/placeholder-avatar.png';
import dropdown from '../../assets/icons/dropdown-arrow.svg';

const Nav = () => {
  return (
    <>
      <div className="Nav">
        <div className="Nav__logo-container">
          <img className="Nav__logo" src={logo} alt="zoomie-logo" />
          <img
            className="Nav__logo-text"
            src={logoText}
            alt="zoomie-logo-text"
          />
        </div>
        <div className="Nav__profile-container">
          <p className="Nav__profile-text">Charlie</p>
          <img
            className="Nav__profile-pic"
            src={placeholder}
            alt="profile-picture"
          />
          <img
            className="Nav__profile-icon"
            src={dropdown}
            alt="select-another-dog-profile"
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
