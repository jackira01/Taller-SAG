import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loginVerify } from '../../redux/productThunk.js/userThunk';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginVerify({ user, password }));
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='login-box bg-opacity-98 bg-gray-900 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-96 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 px-4 sm:px-8 py-16 rounded-2xl shadow-lg flex items-center justify-center'>
      <form onSubmit={handleSubmit}>
        <div className='user-box relative mb-8'>
          <input
            placeholder='User'
            type='text'
            required
            className='w-full py-2 text-white text-lg border-b border-white outline-none bg-transparent'
            onChange={handleUserChange}
          />
        </div>
        <div className='user-box relative mb-8'>
          <input
            placeholder='Password'
            type='password'
            required
            className='w-full py-2 text-white text-lg border-b border-white outline-none bg-transparent'
            onChange={handlePasswordChange}
          />
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='relative inline-block px-8 py-4 text-white text-lg uppercase transition-all duration-500 hover:bg-green-600 hover:text-white rounded-md shadow-md'
          >
            SEND
            <span className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-green-500 animate-btn-anim1'></span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
