import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getDogProfile from '../../utils/getDogProfile';
import getCheckins from '../../utils/getCheckins';
import Loading from '../../components/Loading/Loading';
import DogProfile from '../../components/DogProfile/DogProfile';

const DogProfilePage = () => {
  const { id } = useParams();
  const [dogProfile, setDogProfile] = useState(null);
  const [checkins, setCheckins] = useState([]);

  useEffect(() => {
    getDogProfile({ id, setDogProfile });
  }, [id]);

  useEffect(() => {
    getCheckins({ setCheckins });
  }, []);

  if (!dogProfile || !checkins) {
    return <Loading />;
  }

  return (
    <>
      <DogProfile dogProfile={dogProfile} checkins={checkins} />
    </>
  );
};

export default DogProfilePage;
