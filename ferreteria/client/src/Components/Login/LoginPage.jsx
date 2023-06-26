import React from 'react';
import { useSelector } from 'react-redux';
import DataTable from '../DataTable/DataTable';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const { admin } = useSelector((state) => state.admin);
  return admin ? <DataTable /> : <LoginForm />;
};

export default LoginPage;
