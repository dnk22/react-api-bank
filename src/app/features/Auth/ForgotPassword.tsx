import { useState } from 'react';
import logo from '../../assets/images/logo-icon.svg';
import { IconButton, Input, InputAdornment, Slide } from '@mui/material';
import './auth.scss';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const userName = 'admin';
  const [isLoad, setIsLoad] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="theme-cyan">
      <div>
        <div className="vertical-align-wrap">
          <div className="vertical-align-middle auth-main">
            <div className="auth-box">
              <div className="card">
                <div className="header">
                  <p className="lead">Lấy lại mật khẩu của tôi</p>
                </div>
                <div className="body">
                  <p>
                    Vui lòng điền email của bạn để hoàn tất việc lấy lại mật
                    khẩu.
                  </p>
                  <form className="form-auth-small ng-untouched ng-pristine ng-valid">
                    <div className="form-group">
                      <input className="form-control" placeholder="email" />
                    </div>
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Đặt lại mật khẩu
                    </button>
                    <div className="bottom">
                      <span className="helper-text">
                        Đã nhớ mật khẩu?{' '}
                        <Link style={{ color: '#007bff' }} to="/auth/login">
                          Đăng nhập ngay
                        </Link>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;
