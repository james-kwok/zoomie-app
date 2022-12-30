import axios from 'axios';

const getUser = ({ setUserProfile }) => {
  const userProfileURL = 'http://localhost:8080/dogs/profile';
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
};

export default getUser;
