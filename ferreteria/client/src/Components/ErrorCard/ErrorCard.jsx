import React from 'react';

const ErrorCard = ({ message }) => {
  return (
    <div className='flex justify-center py-60'>
      <div className='bg-red-100 rounded-md p-4 max-w-sm w-full'>
        <div className='flex items-center'>
          <div>
            <svg
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
              className='text-red-600 w-5 h-5'
            >
              <path
                clipRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                fillRule='evenodd'
              ></path>
            </svg>
          </div>
          <div className='ml-10'>
            <p className='text-red-600 font-bold text-sm'>Ha Ocurrido Algo!</p>
            <div className='mt-2'>
              <ul className='text-red-700 text-sm' role='list'>
                <li>{message}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorCard;
