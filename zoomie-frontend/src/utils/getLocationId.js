import axios from 'axios';

const getLocationId = ({ id, setLocation }) => {
  const locationsURL = `http://localhost:8080/locations/${id}`;
  axios
    .get(locationsURL)
    .then((response) => {
      setLocation(response.data);
      window.scrollTo(0, 0);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getLocationId;
