import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DataTable from '../../Components/DataTable/DataTable';

const Dashboard = () => {
  const { isLoggedIn, rol } = useSelector((state) => state.admin);
  const navigate = useNavigate();

  useEffect(() => {
    // Proteger la ruta: solo admins pueden acceder
    if (!isLoggedIn || rol !== 'admin') {
      navigate('/login');
    }
  }, [isLoggedIn, rol, navigate]);

  // Mostrar nada mientras se realiza la validación
  if (!isLoggedIn || rol !== 'admin') {
    return null;
  }

  return <DataTable />;
};

export default Dashboard;
