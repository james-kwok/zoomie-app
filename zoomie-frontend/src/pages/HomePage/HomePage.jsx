import axios from 'axios';
import { useEffect, useState } from 'react';
import NearbyList from '../../components/NearbyList/NearbyList';
import BrowseCard from '../../components/BrowseCard/BrowseCard';
import FeaturedList from '../../components/FeaturedList/FeaturedList';
import Loading from '../../components/Loading/Loading';
import RecentCheckins from '../../components/RecentCheckins/RecentCheckins';

const HomePage = ({ isLoggedIn }) => {
  const locationsURL = 'http://localhost:8080/locations';
  const checkinsURL = 'http://localhost:8080/checkins/';
  const userProfileURL = 'http://localhost:8080/dogs/profile';
  const [userProfile, setUserProfile] = useState([]);
  const [locations, setLocations] = useState([]);
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [coords, setCoords] = useState('');
  const displayProfile = userProfile[0];

  useEffect(() => {
    getLocation();
  }, []);

  // web API for geolocating user, not used yet, will implement in future
  const getLocation = () => {
    if (!navigator.geolocation) {
      // console.log(navigator.geolocation);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords(position.coords);
        // console.log(position.coords);
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, [loading]);

  useEffect(() => {
    if (isLoggedIn) {
      const token = sessionStorage.getItem('authToken');
      axios
        .get(userProfileURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserProfile(response.data);
          window.scrollTo(0, 0);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn]);

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

  if (!locations || !checkins || !coords) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (isLoggedIn) {
    if (!userProfile || !displayProfile) {
      return (
        <>
          <Loading />
        </>
      );
    }
  }
  return (
    <>
      {!loading ? (
        <Loading />
      ) : (
        <>
          <NearbyList
            locations={locations}
            checkins={checkins}
            coords={coords}
          />
          {isLoggedIn && locations && checkins && displayProfile ? (
            <RecentCheckins
              locations={locations}
              checkins={checkins}
              displayProfile={displayProfile}
              isLoggedIn={isLoggedIn}
            />
          ) : null}
          <FeaturedList />
          <BrowseCard />
        </>
      )}
    </>
  );
};

export default HomePage;
