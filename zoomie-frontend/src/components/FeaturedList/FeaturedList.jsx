import './FeaturedList.scss';
import arrow from '../../assets/icons/arrow-right.png';
import dogMeet from '../../assets/illustrations/dog-meet.webp';
import dogPark from '../../assets/illustrations/dog-park-illustration.webp';
import parkBridge from '../../assets/illustrations/park-bridge-illustration.jpeg';

const FeaturedCard = () => {
  return (
    <>
      <div className="FeaturedCard">
        <h1 className="FeaturedCard__title">Ways To Use Zoomie</h1>
        <div className="FeaturedCard__gallery">
          {/* card #1 */}
          <div className="FeaturedCard__container">
            <div className="FeaturedCard__card">
              <img
                className="FeaturedCard__image"
                src={dogMeet}
                alt="dog-park-meetup"
              />
            </div>
            <div className="FeaturedCard__text-container">
              <h2 className="FeaturedCard__card-title">
                Meet other owners & their dogs
              </h2>
              <img
                className="FeaturedCard__icon"
                src={arrow}
                alt="right-arrow"
              />
            </div>
            <p className="FeaturedCard__card-text">
              Socialize dogs the right way
            </p>
          </div>
          {/* card #2 */}
          <div className="FeaturedCard__container">
            <div className="FeaturedCard__card">
              <img
                className="FeaturedCard__image"
                src={dogPark}
                alt="dog-park-empty"
              />
            </div>
            <div className="FeaturedCard__text-container">
              <h2 className="FeaturedCard__card-title">Explore new parks</h2>
              <img
                className="FeaturedCard__icon"
                src={arrow}
                alt="right-arrow"
              />
            </div>
            <p className="FeaturedCard__card-text">
              Find your next favorite spot
            </p>
          </div>
          {/* card #3 */}
          <div className="FeaturedCard__container">
            <div className="FeaturedCard__card">
              <img
                className="FeaturedCard__image"
                src={parkBridge}
                alt="dog-park-bridge"
              />
            </div>
            <div className="FeaturedCard__text-container">
              <h2 className="FeaturedCard__card-title">Make your mark</h2>
              <img
                className="FeaturedCard__icon"
                src={arrow}
                alt="right-arrow"
              />
            </div>
            <p className="FeaturedCard__card-text">
              Check in at parks to let others know
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCard;
