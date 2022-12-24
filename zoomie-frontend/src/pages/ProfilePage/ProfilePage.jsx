import { useEffect, useState } from 'react';
import axios from 'axios';
import UserProfile from '../../components/UserProfile/UserProfile';
import './ProfilePage.scss';

const ProfilePage = ({ isLoggedIn, setIsLoggedIn }) => {
  const userProfileURL = 'http://localhost:8080/dogs/profile';
  const checkinsURL = 'http://localhost:8080/checkins';
  const [userProfile, setUserProfile] = useState([]);
  const [checkins, setCheckins] = useState([]);
  const displayProfile = userProfile[0];

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    axios
      .get(userProfileURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserProfile(response.data);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isLoggedIn]);

  useEffect(() => {
    axios
      .get(checkinsURL)
      .then((response) => {
        setCheckins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!userProfile || !checkins || !displayProfile) {
    return <></>;
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
