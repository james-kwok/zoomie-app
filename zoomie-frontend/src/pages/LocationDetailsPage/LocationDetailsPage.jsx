import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LocationDetails from '../../components/LocationDetails/LocationDetails';

const LocationDetailsPage = ({ isLoggedIn }) => {
  const { id } = useParams();
  const userProfileURL = 'http://localhost:8080/dogs/profile';
  const locationsURL = `http://localhost:8080/locations/${id}`;
  const checkinsURL = `http://localhost:8080/checkins/${id}`;
  const [userProfile, setUserProfile] = useState([]);
  const [locations, setLocations] = useState([]);
  const [checkins, setCheckins] = useState([]);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const token = sessionStorage.getItem('authToken');

  // check if user is logged in
  useEffect(() => {
    if (isLoggedIn) {
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

  // get location details
  useEffect(() => {
    axios
      .get(locationsURL)
      .then((response) => {
        setLocations(response.data);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // get checkins at location
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

  const checkinList = checkins.filter((item) => {
    return item.status > 0;
  });

  return (
    <>
      {/* ensure React to render only after the app receives data from endpoint */}
      {locations.longitude && locations.latitude && checkins && checkinList ? (
        <LocationDetails
          location={locations}
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
