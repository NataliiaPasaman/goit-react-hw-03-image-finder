import { RotatingLines } from  'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.9"
        width="250"
        visible={true}
      />
    </div>
  );
};


