import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import checkinIcon from '../../assets/icons/checkin-icon.svg';
import './DogProfile.scss';

const DogProfile = () => {
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const findCheckins = checkins.filter((checkin) => {
    return checkin.id === dogProfile.id;
  });

  if (!dogProfile) {
    return <></>;
  }
  return (
    <>
      <div className="UserProfile">
        <div className="UserProfile__card">
          <img
            className="UserProfile__avatar"
            src={dogProfile.img}
            alt={dogProfile.name}
          />
          <p className="UserProfile__name">{dogProfile.name}</p>
          <p className="UserProfile__breed">{dogProfile.breed}</p>
          <p className="UserProfile__bio">{dogProfile.bio}</p>
        </div>
        <div className="UserProfile__checkin-card">
          <img
            className="UserProfile__checkin-icon"
            src={checkinIcon}
            alt="checkin-icon"
          />
          <p className="UserProfile__checkin-number">
            {findCheckins.length} Check Ins
          </p>
        </div>
      </div>
    </>
  );
};

export default DogProfile;
