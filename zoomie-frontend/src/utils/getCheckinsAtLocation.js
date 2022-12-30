import axios from 'axios';

const getCheckinsAtLocation = ({ id, setCheckins }) => {
  const checkinsURL = `http://localhost:8080/checkins/${id}`;
  axios
    .get(checkinsURL)
    .then((response) => {
      setCheckins(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getCheckinsAtLocation;
