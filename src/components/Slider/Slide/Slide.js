import React from 'react';

const Slide = ({ url }) => {
  console.log(url);
  return (
    <div className='slide-image'>
      <img src={url} alt='' />
      <div className='overlay'></div>
    </div>
  );
};

export default Slide;
