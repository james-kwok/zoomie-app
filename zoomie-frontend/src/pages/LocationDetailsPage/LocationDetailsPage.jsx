import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LocationDetails from '../../components/LocationDetails/LocationDetails';

const LocationDetailsPage = () => {
  const { id } = useParams();
  const locationsURL = `http://localhost:8080/locations/${id}`;
  const checkinsURL = `http://localhost:8080/checkins/${id}`;
  const [locations, setLocations] = useState([]);
  const [checkins, setCheckins] = useState([]);

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

  useEffect(() => {
    axios
      .get(checkinsURL)
      .then((response) => {
        setCheckins(response.data);
        console.log(response.data)
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
      {locations.lng && locations.lat ? (
        <LocationDetails
          location={locations}
          checkins={checkins}
          lng={locations.lng}
          lat={locations.lat}
        />
      ) : null}
    </>
  );
};

export default LocationDetailsPage;
