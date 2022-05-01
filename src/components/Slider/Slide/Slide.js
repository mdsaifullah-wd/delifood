import React from 'react';
import './Slide.css';

const Slide = ({ url }) => {
  console.log(url);
  return (
    <div className='slide-image'>
      <img src={url} alt='' />
      <div className='overlay'>
        <div className='slider-text container'>
          <h1 className='slogan'>আমরাই বুঝি আপনার রুচি</h1>
          <div className='address'>
            <p>হেয়াকো পূর্ব বাজার, কবির চৌধুরী কমপ্লেক্স, ২য় তলা</p>
            <p>ভুজপুর, ফটিকছড়ি, চট্টগ্রাম।</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
