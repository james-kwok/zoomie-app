import axios from 'axios';
import { useEffect, useState } from 'react';
import BrowseList from '../../components/BrowseList/BrowseList';
import NearbyList from '../../components/NearbyList/NearbyList';

const HomePage = () => {
  const locationsURL = 'http://localhost:8080/locations';
  const dogsURL = 'http://localhost:8080/dogs';
  const [locations, setLocations] = useState([]);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    axios
      .get(locationsURL)
      .then((response) => {
        setLocations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      <NearbyList locations={locations} dogs={dogs} />
      <BrowseList locations={locations} dogs={dogs} />
    </>
  );
};

export default HomePage;
