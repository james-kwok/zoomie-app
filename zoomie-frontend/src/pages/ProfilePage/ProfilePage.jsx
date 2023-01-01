import { useEffect, useState } from 'react';
import getUser from '../../utils/getUser';
import getCheckins from '../../utils/getCheckins';
import UserProfile from '../../components/UserProfile/UserProfile';
import Loading from '../../components/Loading/Loading';

const ProfilePage = ({ isLoggedIn, setIsLoggedIn }) => {
  const [userProfile, setUserProfile] = useState([]);
  const [checkins, setCheckins] = useState([]);
  const displayProfile = userProfile[0];

  useEffect(() => {
    getUser({ setUserProfile });
  }, [isLoggedIn]);

  useEffect(() => {
    getCheckins({ setCheckins });
  }, []);

  if (!userProfile || !checkins || !displayProfile) {
    return <Loading />;
  }

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
