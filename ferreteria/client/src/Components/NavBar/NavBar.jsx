import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menu from './Menu/Menu.jsx';
import DarkModeButton from '../DarkMode/DarkModeButton.jsx';
import { IconButton, Tooltip } from '@material-tailwind/react';
import { UserIcon } from '@heroicons/react/24/outline';

import logo from './Taller SAG logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className='border-gray-200 bg-navbarLigth dark:bg-navBar fixed top-0 w-full z-50'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link to='/inicio' className='flex items-center'>
            <img src={logo} className='h-10 mr-3' alt='Flowbite Logo' />
          </Link>
          <div className='hidden md:block '>
            <Menu />
          </div>

          <button
            className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            onClick={toggleNavbar}
          >
            <span className='sr-only'>Abrir menú principal</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} md:hidden w-full`}>
            <Menu />
          </div>

          {location.pathname != '/login' && (
            <Link to='/login'>
              <Tooltip content='INGRESAR'>
                <IconButton variant='text' color='blue-gray'>
                  <UserIcon className='h-6 w-6' />
                </IconButton>
              </Tooltip>
            </Link>
          )}

          <DarkModeButton />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
