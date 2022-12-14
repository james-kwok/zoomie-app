import { Link } from 'react-router-dom';
import logo from '../../assets/logos/zoomie-logo.png';
import logoText from '../../assets/logos/zoomie-text.png';
import AuthButton from '../AuthButton/AuthButton';
import './Nav.scss';

const Nav = ({ isLoggedIn }) => {
  return (
    <>
      <div className="Nav">
        <Link to="/" className="Nav__logo-container">
          <img className="Nav__logo" src={logo} alt="zoomie-logo" />
          <img
            className="Nav__logo-text"
            src={logoText}
            alt="zoomie-logo-text"
          />
        </Link>
        <div className="Nav__button-container">
          <AuthButton isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </>
  );
};

export default Nav;
