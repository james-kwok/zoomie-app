import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DogProfile from '../../components/DogProfile/DogProfile';

const DogProfilePage = () => {
  const { id } = useParams();
  const dogProfileURL = `http://localhost:8080/dogs/${id}`;
  const checkinsURL = 'http://localhost:8080/checkins';
  const [dogProfile, setDogProfile] = useState(null);
  const [checkins, setCheckins] = useState([]);

  useEffect(() => {
    axios
      .get(dogProfileURL)
      .then((response) => {
        setDogProfile(response.data);
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!dogProfile || !checkins) {
    return <></>;
  }

  return (
    <>
      <DogProfile dogProfile={dogProfile} checkins={checkins} />
    </>
  );
};

export default DogProfilePage;
