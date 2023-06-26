import React from 'react';
import ItemsContainer from './ItemsContainer';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname != '/login' && (
        <footer className='bg-navbarLigth dark:bg-card bg-navbarLigth text-white flex flex-col bottom-0'>
          <div className='flex-grow'>
            <ItemsContainer />
          </div>
          <div className='w-1/2 mx-auto border-t border-gray-400'></div>
          <div className='text-center mx-auto pt-4 text-gray-400 text-sm pb-8'>
            <span>© 2020 Appy. All rights reserved.</span>
            <span>Terms · Privacy Policy</span>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
