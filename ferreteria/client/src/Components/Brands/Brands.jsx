import React from 'react';
import CardBrand from './CardBrand';

const BrandURL = [
  'https://corona.co/medias/Logo-Abba.png?context=bWFzdGVyfGltYWdlc3wyMDEyOHxpbWFnZS9wbmd8aDY0L2gxNy84ODk0MTU2NjM2MTkwL0xvZ29fQWJiYS5wbmd8N2RhNTk0Y2VjYTc1YTRhOGVjMTk2ZGMzZmZkYjA0MGY2N2I0NzgwYTRhZTI4Mzk0YTYwYjA0NGJhMWMxNzJmOA',
  'https://continentalelectrodomesticos.ec/wp-content/uploads/2025/04/logopie.png',
  'https://heos.homeelementsweb.com/images/logo2.png?v=3',
  'https://logodownload.org/wp-content/uploads/2020/12/oster-logo-1.png',
  'https://cccreativas.com/wp-content/uploads/2017/02/IMUSA-LOGO-500.png',
];

const Brands = () => {
  return (
    <div className='px-4 py-8 md:px-8 md:py-10 lg:px-20 lg:py-12 max-w-full overflow-hidden'>
      <div>
        <h2 className='text-center text-2xl dark:text-text font-semibold leading-8 '>
          Encuentra Tu Marca Preferida!
        </h2>
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:max-w-xl md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 lg:gap-x-8'>
          {BrandURL.map((URL, index) => {
            return <CardBrand key={index} src={URL} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Brands;
