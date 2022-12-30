import { useEffect, useState } from 'react';
import getLocations from '../../utils/getLocations';
import getCheckins from '../../utils/getCheckins';
import Loading from '../../components/Loading/Loading';
import BrowseList from '../../components/BrowseList/BrowseList';

const BrowsePage = () => {
  const [locations, setLocations] = useState([]);
  const [checkins, setCheckins] = useState([]);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getLocations({ setLocations });
    getCheckins({ setCheckins });
    Promise.all([getLocations, getCheckins])
      .then((result) => {
        setSuccess(result);
      })
      .catch((error) => setError(error));
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
