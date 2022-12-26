import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import BrowseList from '../../components/BrowseList/BrowseList';

const BrowsePage = () => {
  const locationsURL = 'http://localhost:8080/locations';
  const checkinsURL = 'http://localhost:8080/checkins/';
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
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <BrowseList locations={locations} checkins={checkins} />
    </>
  );
};

export default BrowsePage;
