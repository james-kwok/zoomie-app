import Lottie from 'react-lottie';
import loading from '../../assets/lottie/loading-lottie.json';
import './Loading.scss';

const Loading = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSetings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <div className="Loading">
        <Lottie options={defaultOptions} height={350} width={350} />;
      </div>
    </>
  );
};

export default Loading;
