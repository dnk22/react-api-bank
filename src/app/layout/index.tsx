import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import PageHeader from './components/PageHeader';
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
    <div className="wrapper">
      <div>
        <Header />
        <Sider />
      </div>
      <div id="main-content">
        <div className="container-fluid">
          <PageHeader />
          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="card">
                <div className="body">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutCommon;
