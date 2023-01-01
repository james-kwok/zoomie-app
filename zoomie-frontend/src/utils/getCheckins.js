import axios from 'axios';

const getCheckins = ({ setCheckins }) => {
  const checkinsURL = 'http://localhost:8080/checkins';
  axios
    .get(checkinsURL)
    .then((response) => {
      setCheckins(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getCheckins;
