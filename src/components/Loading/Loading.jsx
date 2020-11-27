import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <>
      <Loader type="TailSpin" color="#985FF3" height={80} width={80} />{' '}
    </>
  );
};

export default Loading;
