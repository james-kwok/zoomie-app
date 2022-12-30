import axios from 'axios';

const getDogProfile = ({ id, setDogProfile }) => {
  const dogProfileURL = `http://localhost:8080/dogs/${id}`;
  axios
    .get(dogProfileURL)
    .then((response) => {
      setDogProfile(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getDogProfile;
