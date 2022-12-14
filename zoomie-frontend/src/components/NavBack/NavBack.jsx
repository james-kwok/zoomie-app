import { Link } from 'react-router-dom';
import backIcon from '../../assets/icons/chevron-left.png';
import AuthButton from '../AuthButton/AuthButton';
import './NavBack.scss';

const NavBack = ({ isLoggedIn }) => {
  return (
    <>
      <div className="NavBack">
        {/* Link -1 to always navigate to previous page */}
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
