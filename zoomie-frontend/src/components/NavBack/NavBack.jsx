import { Link, useNavigate } from 'react-router-dom';
import './NavBack.scss';
import backIcon from '../../assets/icons/back-arrow.svg';
import AuthButton from '../AuthButton/AuthButton';

const NavBack = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    sessionStorage.setItem('loggedIn', JSON.stringify(false));
    setIsLoggedIn(false);
    navigate('/locations');
  };
  return (
    <>
      <div className="NavBack">
        <Link to="/" className="NavBack__logo-container">
          <img
            className="NavBack__back-icon"
            src={backIcon}
            alt="back-to-home"
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

export default NavBack;
