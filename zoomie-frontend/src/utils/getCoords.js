const getCoords = ({ setCoords }) => {
  if (!navigator.geolocation) {
  } else {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords(position.coords);
    });
  }
};

export default getCoords;
