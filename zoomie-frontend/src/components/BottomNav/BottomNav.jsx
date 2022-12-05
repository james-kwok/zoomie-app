import { useState, useEffect, useNavigate } from 'react';
import './BottomNav.scss';
import homeIcon from '../../assets/icons/home-icon.svg';
import homeIconActive from '../../assets/icons/home-icon-active.svg';
import profileIcon from '../../assets/icons/profile-icon.svg';
import profileIconActive from '../../assets/icons/profile-icon-active.svg';

const BottomNav = () => {
  const [leftIcon, setLeftIcon] = useState(true);
  const [rightIcon, setRightIcon] = useState(true);
  const [home, setHome] = useState(homeIcon);
  const [profile, setProfile] = useState(profileIcon);

  useEffect(() => {
    leftIcon ? setHome(homeIcon) : setHome(homeIconActive);
  });

  useEffect(() => {
    rightIcon ? setProfile(profileIcon) : setProfile(profileIconActive);
  });
  return (
    <>
      <div className="BottomNav">
        <div className="BottomNav__left">
          <img
            className="BottomNav__home-icon"
            src={home}
            onClick={() => setLeftIcon(!leftIcon)}
            alt="home-icon"
          />
        </div>
        <div className="BottomNav__right">
          <img
            className="BottomNav__profile-icon"
            src={profile}
            onClick={() => setRightIcon(!rightIcon)}
            alt="profile-icon"
          />
        </div>
      </div>
    </>
  );
};

export default BottomNav;
