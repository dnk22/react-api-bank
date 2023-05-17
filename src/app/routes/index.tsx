import { Route, Routes, useNavigate } from 'react-router-dom';
import LayoutCommon from '../layout/index';

import Login from '../features/Auth/Login';
import Register from '../features/Auth/Register';
import Account from '../features/Account';
import ForgotPassword from 'features/Auth/ForgotPassword';
import { useEffect } from 'react';

function AppRouter() {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem('token');

  useEffect(() => {
    if (!isLogged) {
      navigate('/auth/login');
    }
  }, [isLogged, navigate]);

  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/registration" element={<Register />} />
      <Route path="/auth/recovery" element={<ForgotPassword />} />
      <Route path="/" element={LayoutCommon}>
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  );
}
export default AppRouter;
