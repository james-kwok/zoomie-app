import axios from 'axios';

const getLocations = ({ setLocations }) => {
  const locationsURL = 'http://localhost:8080/locations';
  axios
    .get(locationsURL)
    .then((response) => {
      setLocations(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getLocations;
