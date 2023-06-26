import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const RouteMenu = ({ name }) => {
    const location = useLocation();
  const classText =
    'text-lg block py-2 pl-3 pr-4 text-textLigth rounded md:text-accentColor md:p-0 text-white';
  const classTextHover =
    'text-lg block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 hover:text-secundaryLigth md:p-0 text-text';
  return (
    <Link to={`/${name}`}>
      <div
        className={location.pathname === `/${name}` ? classText : classTextHover }
      >
        {name}
      </div>
    </Link>
  );
};

export default RouteMenu;
