import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Sider from './Sider';

function LayoutCommon() {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem('token');

  useEffect(() => {
    if (!isLogged) {
      navigate('/auth/login');
    }
  }, [isLogged, navigate]);
  return (
    <div>
      <Header />
      <Sider />
    </div>
  );
}

export default LayoutCommon;
