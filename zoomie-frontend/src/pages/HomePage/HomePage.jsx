import axios from 'axios';
import { useEffect, useState } from 'react';
import BrowseList from '../../components/BrowseList/BrowseList';
import NearbyList from '../../components/NearbyList/NearbyList';
import Loading from '../../components/Loading/Loading';

const HomePage = () => {
  const locationsURL = 'http://localhost:8080/locations';
  const checkinsURL = 'http://localhost:8080/checkins/';
  const [locations, setLocations] = useState([]);
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLocation();
  }, []);

  // web API for geolocating user, not used yet, will implement in future
  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log(navigator.geolocation);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longtitude = position.coords.longitude;
        const timestamp = position.timestamp;
        console.log(latitude);
        console.log(longtitude);
        console.log(timestamp);
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2500);
  }, [loading]);

  useEffect(() => {
    axios
      .get(locationsURL)
      .then((response) => {
        setTimeout(() => {
          setLocations(response.data);
        }, 800);
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
      {!loading ? (
        <Loading />
      ) : (
        <>
          <NearbyList locations={locations} checkins={checkins} />
          <BrowseList locations={locations} checkins={checkins} />
        </>
      )}
    </>
  );
};

export default HomePage;
