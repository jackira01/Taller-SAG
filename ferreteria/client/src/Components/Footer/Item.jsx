import React from 'react';

const Item = ({ Links, title }) => {
  return (
    <div>
      <h3 className='mb-4 font-bold text-base md:text-lg tracking-wide text-white'>
        {title}
      </h3>
      <ul className='space-y-3'>
        {Links.map((link) => (
          <li key={link.name}>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base cursor-pointer inline-block'
              href={link.link}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
