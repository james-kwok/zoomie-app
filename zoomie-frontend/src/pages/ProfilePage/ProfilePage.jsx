import UserProfile from '../../components/UserProfile/UserProfile';
import './ProfilePage.scss';

const ProfilePage = ({ displayProfile, checkins, setIsLoggedIn }) => {
  return (
    <>
      <div className="ProfilePage">
        <UserProfile
          displayProfile={displayProfile}
          checkins={checkins}
          setIsLoggedIn={setIsLoggedIn}
        />
      </div>
    </>
  );
};

export default ProfilePage;
