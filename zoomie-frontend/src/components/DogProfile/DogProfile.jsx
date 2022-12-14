import checkinIcon from '../../assets/icons/checkin-icon.svg';
import './DogProfile.scss';

const DogProfile = ({ dogProfile, checkins }) => {
  const findCheckins = checkins.filter((checkin) => {
    return checkin.id === dogProfile.id;
  });
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
