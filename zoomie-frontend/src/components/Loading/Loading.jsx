import Lottie from 'lottie-react';
import loading from '../../assets/lottie/loading-lottie.json';
import './Loading.scss';

const Loading = () => {
  return (
    <>
      <div className="Loading">
        <Lottie
          animationData={loading}
          loop={true}
          className="Loading__lottie"
        />
      </div>
    </>
  );
};

export default Loading;
