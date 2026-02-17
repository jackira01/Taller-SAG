import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/productThunk.js/userThunk';

const RegisterForm = ({ onSwitchToLogin }) => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.error || {});
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [user, setUser] = useState('');
  const [localMessage, setLocalMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalMessage('');

    // Validaciones
    if (!user.trim()) {
      setLocalMessage('El usuario es requerido');
      return;
    }
    if (user.length < 3) {
      setLocalMessage('El usuario debe tener al menos 3 caracteres');
      return;
    }
    if (!password) {
      setLocalMessage('La contraseña es requerida');
      return;
    }
    if (password.length < 6) {
      setLocalMessage('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    if (password !== passwordConfirm) {
      setLocalMessage('Las contraseñas no coinciden');
      return;
    }

    setIsLoading(true);
    const result = await dispatch(registerUser({ user, password, passwordConfirm }));
    setIsLoading(false);

    if (result.success) {
      setLocalMessage('Registro exitoso. Por favor inicia sesión.');
      setUser('');
      setPassword('');
      setPasswordConfirm('');
      setTimeout(() => {
        onSwitchToLogin();
      }, 2000);
    } else {
      setLocalMessage(result.message || 'Error al registrar usuario');
    }
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  return (
    <div className='login-box bg-opacity-98 bg-gray-900 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-96 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 px-4 sm:px-8 py-16 rounded-2xl shadow-lg flex items-center justify-center'>
      <form onSubmit={handleSubmit}>
        <h2 className='text-white text-2xl font-bold text-center mb-8'>Registrarse</h2>
        
        <div className='user-box relative mb-8'>
          <input
            placeholder='Usuario'
            type='text'
            required
            className='w-full py-2 text-white text-lg border-b border-white outline-none bg-transparent'
            onChange={handleUserChange}
            value={user}
          />
        </div>

        <div className='user-box relative mb-8'>
          <input
            placeholder='Contraseña'
            type='password'
            required
            className='w-full py-2 text-white text-lg border-b border-white outline-none bg-transparent'
            onChange={handlePasswordChange}
            value={password}
          />
        </div>

        <div className='user-box relative mb-8'>
          <input
            placeholder='Confirmar Contraseña'
            type='password'
            required
            className='w-full py-2 text-white text-lg border-b border-white outline-none bg-transparent'
            onChange={handlePasswordConfirmChange}
            value={passwordConfirm}
          />
        </div>

        {localMessage && (
          <div className={`mb-4 px-4 py-2 rounded text-center text-sm ${
            localMessage.includes('exitoso') || localMessage.includes('Registro exitoso')
              ? 'bg-green-600 text-white'
              : 'bg-red-600 text-white'
          }`}>
            {localMessage}
          </div>
        )}

        {errorMessage && (
          <div className='mb-4 px-4 py-2 rounded text-center text-sm bg-red-600 text-white'>
            {errorMessage}
          </div>
        )}

        <div className='flex justify-center mb-4'>
          <button
            type='submit'
            disabled={isLoading}
            className='relative inline-block px-8 py-4 text-white text-lg uppercase transition-all duration-500 hover:bg-green-600 hover:text-white rounded-md shadow-md disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isLoading ? 'REGISTRANDO...' : 'REGISTRAR'}
          </button>
        </div>

        <div className='text-center mt-4'>
          <p className='text-white text-sm'>
            ¿Ya tienes cuenta?{' '}
            <button
              type='button'
              onClick={onSwitchToLogin}
              className='text-green-600 hover:text-green-400 transition-colors font-semibold'
            >
              Inicia Sesión
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
