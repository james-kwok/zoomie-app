import { Link } from 'react-router-dom';
import './NavBack.scss';
import backIcon from '../../assets/icons/back-arrow.svg';
import AuthButton from '../AuthButton/AuthButton';

const NavBack = ({ isLoggedIn }) => {
  return (
    <>
      <div className="NavBack">
        <Link to={-1} className="NavBack__logo-container">
          <img
            className="NavBack__back-icon"
            src={backIcon}
            alt="back-to-home"
          />
        </Link>
        <div className="Nav__button-container">
          <AuthButton isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </>
  );
};

export default NavBack;
