import React from 'react';
import ItemsContainer from './ItemsContainer';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && (
        <footer className='bg-navbarLigth dark:bg-card text-white mt-auto w-full'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Main Footer Content */}
            <div className='py-8 md:py-12'>
              <ItemsContainer />
            </div>
            
            {/* Divider */}
            <div className='border-t border-gray-600'></div>
            
            {/* Footer Bottom */}
            <div className='py-6'>
              <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <div className='text-gray-400 text-sm'>
                  <span>© {new Date().getFullYear()} Ferretería Taller SAG. Todos los derechos reservados.</span>
                </div>
                <div className='flex gap-6 text-gray-400 text-sm'>
                  <a href='#' className='hover:text-white transition-colors duration-300'>
                    Términos de Servicio
                  </a>
                  <a href='#' className='hover:text-white transition-colors duration-300'>
                    Política de Privacidad
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
