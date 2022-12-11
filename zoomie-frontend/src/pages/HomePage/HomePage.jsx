import axios from 'axios';
import { useEffect, useState } from 'react';
import BrowseList from '../../components/BrowseList/BrowseList';
import NearbyList from '../../components/NearbyList/NearbyList';

const HomePage = () => {
  const locationsURL = 'http://localhost:8080/locations';
  const checkinsURL = `http://localhost:8080/checkins/`;
  const [locations, setLocations] = useState([]);
  const [checkins, setCheckins] = useState([]);

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
      .get(checkinsURL)
      .then((response) => {
        setCheckins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!locations || !checkins) {
    return <></>;
  }
  return (
    <>
      <NearbyList locations={locations} checkins={checkins} />
      <BrowseList locations={locations} checkins={checkins} />
    </>
  );
};

export default HomePage;
