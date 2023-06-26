import React from 'react';
import CardBrand from './CardBrand';

const BrandURL = [
  'https://corona.co/medias/Logo-Abba.png?context=bWFzdGVyfGltYWdlc3wyMDEyOHxpbWFnZS9wbmd8aDY0L2gxNy84ODk0MTU2NjM2MTkwL0xvZ29fQWJiYS5wbmd8N2RhNTk0Y2VjYTc1YTRhOGVjMTk2ZGMzZmZkYjA0MGY2N2I0NzgwYTRhZTI4Mzk0YTYwYjA0NGJhMWMxNzJmOA',
  'https://th.bing.com/th/id/R.bff48a69b4d4cf6c940e52106f45c7b1?rik=5y%2fb1AkJ07UcQA&pid=ImgRaw&r=0',
  'https://www.homeelementsweb.com/wp-content/uploads/2020/12/logo-homeelements-4.png',
  'https://logodownload.org/wp-content/uploads/2020/12/oster-logo-1.png',
  'https://cccreativas.com/wp-content/uploads/2017/02/IMUSA-LOGO-500.png',
];

const Brands = () => {
  return (
    <div className='p-20'>
      <div>
        <h2 className='text-center text-2xl dark:text-text font-semibold leading-8 '>
          Encuentra Tu Marca Preferida!
        </h2>
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
          {BrandURL.map((URL, index) => {
            return <CardBrand key={index} src={URL} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Brands;
