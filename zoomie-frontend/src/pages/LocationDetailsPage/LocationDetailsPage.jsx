import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LocationDetails from '../../components/LocationDetails/LocationDetails';

const LocationDetailsPage = () => {
  const { id } = useParams();
  const locationsURL = `http://localhost:8080/locations/${id}`;
  const dogsURL = 'http://localhost:8080/dogs';
  const [locations, setLocations] = useState([]);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    axios
      .get(locationsURL)
      .then((response) => {
        setLocations(response.data);
        window.scrollTo(0, 0)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(dogsURL)
      .then((response) => {
        setDogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!locations || !dogs) {
    return <></>;
  }

  return (
    <>
      <LocationDetails location={locations} dog={dogs} />
    </>
  );
};

export default LocationDetailsPage;
