import { RotatingLines } from 'react-loader-spinner';

import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <RotatingLines strokeColor="#ebebeb" />
    </StyledLoader>
  );
};

export default Loader;