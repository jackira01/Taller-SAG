import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { isLoggedIn, rol } = useSelector((state) => state.admin);
  const navigate = useNavigate();

  // Si el usuario ya está logeado, redirigir según su rol
  React.useEffect(() => {
    if (isLoggedIn) {
      if (rol === 'admin') {
        navigate('/dashboard');
      } else {
        navigate('/inicio');
      }
    }
  }, [isLoggedIn, rol, navigate]);

  const handleSwitchToRegister = () => {
    setIsLogin(false);
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  return isLogin ? (
    <LoginForm onSwitchToRegister={handleSwitchToRegister} />
  ) : (
    <RegisterForm onSwitchToLogin={handleSwitchToLogin} />
  );
};

export default LoginPage;

