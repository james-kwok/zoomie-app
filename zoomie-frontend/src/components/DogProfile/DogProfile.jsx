import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DogProfile.scss';

const DogProfile = () => {
  const { id } = useParams();
  const dogProfileURL = `http://localhost:8080/dogs/${id}`;
  const [dogProfile, setDogProfile] = useState(null);

  useEffect(() => {
    axios
      .get(dogProfileURL)
      .then((response) => {
        setDogProfile(response.data);
        console.log(response.data);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!dogProfile) {
    return <></>;
  }
  return (
    <>
      <div className="DogProfile">
        <div className="DogProfile__card">
          <img
            className="DogProfile__avatar"
            src={dogProfile.img}
            alt={dogProfile.name}
          />
          <p className="DogProfile__name">{dogProfile.name}</p>
          <p className="DogProfile__bio">{dogProfile.bio}</p>
        </div>
      </div>
    </>
  );
};

export default DogProfile;
