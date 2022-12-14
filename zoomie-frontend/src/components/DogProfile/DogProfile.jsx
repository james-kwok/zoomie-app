import checkinIcon from '../../assets/icons/checkin-icon.svg';
import './DogProfile.scss';

const DogProfile = ({ dogProfile, checkins }) => {
  const findCheckins = checkins.filter((checkin) => {
    return checkin.id === dogProfile.id;
  });
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
          <p className="DogProfile__breed">{dogProfile.breed}</p>
          <p className="DogProfile__bio">{dogProfile.bio}</p>
        </div>
        <div className="DogProfile__checkin-card">
          <img
            className="DogProfile__checkin-icon"
            src={checkinIcon}
            alt="checkin-icon"
          />
          <p className="DogProfile__checkin-number">
            {findCheckins.length} Check Ins
          </p>
        </div>
      </div>
    </>
  );
};

export default DogProfile;
