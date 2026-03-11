import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && (
        <footer className='bg-navbarLigth dark:bg-card text-text w-full mt-auto'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

            {/* Main row */}
            <div className='py-6 flex flex-col md:flex-row items-center justify-between gap-4'>

              {/* Brand */}
              <div className='flex flex-col items-center md:items-start'>
                <span className='font-bold text-base text-white tracking-wide'>Ferretería Taller SAG</span>
                <span className='flex items-center gap-1 text-xs text-secundary mt-0.5'>
                  <FaMapMarkerAlt className='text-accentColor' />
                  Ibagué, Tolima
                </span>
              </div>

              {/* Nav links */}
              <nav className='flex items-center gap-5 text-sm'>
                <Link to='/' className='text-secundary hover:text-white transition-colors'>Inicio</Link>
                <Link to='/productos' className='text-secundary hover:text-white transition-colors'>Productos</Link>
                <Link to='/servicios' className='text-secundary hover:text-white transition-colors'>Contáctanos</Link>
              </nav>

              {/* Contact */}
              <div className='flex items-center gap-4 text-sm'>
                <a
                  href='https://api.whatsapp.com/send?phone=573118426746'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-1.5 text-secundary hover:text-white transition-colors'
                >
                  <FaWhatsapp className='text-green-400 text-base' />
                  +57 311 842 6746
                </a>
                <a
                  href='mailto:contacto@ferreteriasag.cl'
                  className='flex items-center gap-1.5 text-secundary hover:text-white transition-colors'
                >
                  <MdEmail className='text-accentColor text-base' />
                  contacto@ferreteriasag.cl
                </a>
              </div>
            </div>

            {/* Bottom bar */}
            <div className='border-t border-gray-600 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-secundary'>
              <span>© {new Date().getFullYear()} Ferretería Taller SAG. Todos los derechos reservados.</span>
              <div className='flex gap-4'>
                <a href='#' className='hover:text-white transition-colors'>Términos de Servicio</a>
                <a href='#' className='hover:text-white transition-colors'>Política de Privacidad</a>
              </div>
            </div>

          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
