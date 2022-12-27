import './FeaturedList.scss';
import dogMeet from '../../assets/illustrations/dog-meet.webp';
import dogPark from '../../assets/illustrations/dog-park-illustration.webp';
import parkBridge from '../../assets/illustrations/park-bridge-illustration.jpeg';

const FeaturedCard = () => {
  return (
    <>
      <div className="FeaturedCard">
        <h1 className="FeaturedCard__title">Ways To Use Zoomie</h1>
        <p className="FeaturedCard__description">
          Not sure where to start? Check out Zoomie's key features
        </p>
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
                See who's going
              </h2>
            </div>
            <p className="FeaturedCard__card-text">
              Make the best decision for your dog and socialize the right way
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
            </div>
            <p className="FeaturedCard__card-text">
              Go on an adventure with your dog and find that new favorite spot
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
              <h2 className="FeaturedCard__card-title">Be part of a community</h2>
            </div>
            <p className="FeaturedCard__card-text">
              Check in at parks, see familiar faces, start building a community
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCard;
