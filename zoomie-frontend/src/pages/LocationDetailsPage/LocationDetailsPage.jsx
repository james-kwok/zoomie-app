import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getUser from '../../utils/getUser';
import getLocationId from '../../utils/getLocationId';
import getCheckinsAtLocation from '../../utils/getCheckinsAtLocation';
import LocationDetails from '../../components/LocationDetails/LocationDetails';

const LocationDetailsPage = ({ isLoggedIn }) => {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState([]);
  const [location, setLocation] = useState([]);
  const [checkins, setCheckins] = useState([]);
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  useEffect(() => {
    // check if user is logged in
    if (isLoggedIn) {
      getUser({ setUserProfile });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    // get location details
    getLocationId({ id, setLocation });
  }, [id]);

  useEffect(() => {
    // get checkins at location
    getCheckinsAtLocation({ id, setCheckins });
  }, []);

  if (!location || !checkins) {
    return <Loading />;
  }

  const checkinList = checkins.filter((item) => {
    return item.status > 0;
  });

  return (
    <>
      {/* ensure React to render only after the app receives data from endpoint */}
      {location.longitude && location.latitude && checkins && checkinList ? (
        <LocationDetails
          location={location}
          checkins={checkinList}
          userProfile={userProfile}
          isCheckedIn={isCheckedIn}
          setIsCheckedIn={setIsCheckedIn}
          isLoggedIn={isLoggedIn}
        />
      ) : null}
    </>
  );
};

export default LocationDetailsPage;
