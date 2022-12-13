import { Link } from 'react-router-dom';
import editIcon from '../../assets/icons/edit-icon.svg';
import checkinIcon from '../../assets/icons/checkin-icon.svg';
import './UserProfile.scss';

const UserProfile = ({ displayProfile, findCheckins, handleLogOut }) => {
  return (
    <>
      <div className="UserProfile">
        <div className="UserProfile__card">
          <img
            className="UserProfile__avatar"
            src={displayProfile.img}
            alt={displayProfile.name}
          />
          <p className="UserProfile__name">{displayProfile.name}</p>
          <p className="UserProfile__breed">{displayProfile.breed}</p>
          <p className="UserProfile__bio">{displayProfile.bio}</p>
          <Link to="/profile/edit" className="UserProfile__edit-form">
            <img className="UserProfile__icon" src={editIcon} alt="edit-icon" />
            <p className="UserProfile__link">Edit Profile</p>
          </Link>
        </div>
        <div className="UserProfile__checkin-card">
          <img
            className="UserProfile__checkin-icon"
            src={checkinIcon}
            alt="checkin-icon"
          />
          <p className="UserProfile__checkin-number">
            {findCheckins.length} Check Ins
          </p>
        </div>
        <button
          className="UserProfile__logout-button"
          onClick={() => handleLogOut()}
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default UserProfile;
