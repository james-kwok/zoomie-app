import './LocationCardXL.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

const LocationCardXL = () => {
  const locationsURL = 'http://localhost:8080/locations';
  const dogsURL = 'http://localhost:8080/dogs';
  const [locations, setLocations] = useState([]);
  const [dogs, setDogs] = useState([]);

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
      .get(dogsURL)
      .then((response) => {
        setDogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!locations || !dogs) {
    return <></>;
  }

  const displayLocations = locations.slice(0, 10);
  console.log(displayLocations);

  const displayDogs = dogs.slice(0, 3);
  console.log(displayDogs);

  const remainingDogs = dogs.slice(3);
  console.log(remainingDogs);

  return (
    <>
      <div className="LocationCardXL">
        {displayLocations.map((location, index) => {
          return (
            <div className="LocationCardXL__card" key={index}>
              <div className="LocationCardXL__gradient">
                <img
                  className="LocationCardXL__image"
                  src={location.img}
                  alt=""
                />
              </div>
              <h1 className="LocationCardXL__title">{location.name}</h1>
              <p className="LocationCardXL__text">{location.address}</p>
              <div className="LocationCardXL__gallery">
                {displayDogs.map((dog, index) => {
                  return (
                    <img
                      className="LocationCardXL__avatar"
                      key={index}
                      src={dog.img}
                      alt={dog.name}
                    />
                  );
                })}
                <p className="LocationCardXL__remaining-dogs">
                  ...+ {remainingDogs.length} more
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LocationCardXL;
