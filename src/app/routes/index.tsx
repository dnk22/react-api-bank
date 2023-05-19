import { Route, Routes } from 'react-router-dom';
import LayoutCommon from '../layout/index';

import Login from '../features/Auth/Login';
import Register from '../features/Auth/Register';
import Account from '../features/Account';
import ForgotPassword from 'features/Auth/ForgotPassword';
import PageNotFound from 'components/PageError/404';

function AppRouter() {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/registration" element={<Register />} />
      <Route path="/auth/recovery" element={<ForgotPassword />} />
      <Route path="/auth/recovery" element={<ForgotPassword />} />
      <Route path="/" element={<LayoutCommon />}>
        <Route path="/dashboard" index element={<Account />} />
        <Route path="/account" index element={<Account />} />
        <Route path="/billing" element={<Account />} />
        <Route path="/payment-management" element={<Account />} />
        <Route path="/captcha" element={<Account />} />
        <Route path="/cron-management" element={<Account />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
export default AppRouter;
