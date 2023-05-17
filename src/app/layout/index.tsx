import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LayoutCommon() {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem('token');

  useEffect(() => {
    if (!isLogged) {
      navigate('/auth/login');
    }
  }, [isLogged, navigate]);
  return <div>layoy</div>;
}
export default LayoutCommon();
