import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.scss';

const UserProfile = ({ isLoggedIn }) => {
  const userProfileURL = `http://localhost:8080/dogs/profile`;
  const [userProfile, setUserProfile] = useState(null);

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
        console.log(response);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isLoggedIn]);
  return <></>;
};

export default UserProfile;
