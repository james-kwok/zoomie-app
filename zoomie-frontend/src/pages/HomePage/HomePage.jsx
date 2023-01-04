import { useEffect, useState } from 'react';
import getCoords from '../../utils/getCoords';
import getUser from '../../utils/getUser';
import getLocations from '../../utils/getLocations';
import getCheckins from '../../utils/getCheckins';
import NearbyList from '../../components/NearbyList/NearbyList';
import BrowseCard from '../../components/BrowseCard/BrowseCard';
import FeaturedList from '../../components/FeaturedList/FeaturedList';
import Loading from '../../components/Loading/Loading';
import RecentCheckins from '../../components/RecentCheckins/RecentCheckins';

const HomePage = ({ isLoggedIn }) => {
  const [userProfile, setUserProfile] = useState([]);
  const [locations, setLocations] = useState([]);
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [coords, setCoords] = useState('');
  const displayProfile = userProfile[0];

  useEffect(() => {
    // check if user is logged in
    if (isLoggedIn) {
      getUser({ setUserProfile });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    // get user coords, all locations, all check ins
    getCoords({ setCoords });
    getLocations({ setLocations });
    getCheckins({ setCheckins });
    Promise.all([getCoords, getLocations, getCheckins])
      .then(() => {
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 800);
  }, [loading]);

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
