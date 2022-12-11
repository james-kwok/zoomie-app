import { Link, useNavigate } from 'react-router-dom';
import './Nav.scss';
import logo from '../../assets/logos/zoomie-logo.svg';
import logoText from '../../assets/logos/zoomie-text.svg';
import AuthButton from '../AuthButton/AuthButton';

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    sessionStorage.setItem('loggedIn', JSON.stringify(false));
    setIsLoggedIn(false);
    navigate('/locations');
  };
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
          <Link to="/welcome" onClick={handleLogOut}>
            <AuthButton isLoggedIn={isLoggedIn} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
