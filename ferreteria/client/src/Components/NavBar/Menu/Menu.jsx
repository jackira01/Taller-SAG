import React from 'react';
import Search from '../Search/Search';
import RouteMenu from './RouteMenu';

const arrayRoutes = ['inicio', 'productos', 'servicios'];

const Menu = () => {
  return (
    <div className='w-full md:flex md:w-auto md:order-1'>
      <ul className='font-medium flex items-center justify-center flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0'>
        {arrayRoutes.map((name, index) => {
          return <RouteMenu key={index} name={name} />;
        })}
        <li>
          <Search />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
