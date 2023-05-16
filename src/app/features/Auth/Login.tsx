import { useState } from 'react';
import logo from '../../assets/images/logo-icon.svg';
import './auth.scss';

function Login() {
  const [isLoad, setIsLoad] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="theme-cyan">
      <div
        className="page-loader-wrapper"
        style={{ display: isLoad ? 'block' : 'none' }}
      >
        <div className="loader">
          <div className="m-t-30">
            <img
              src={logo}
              width="48"
              height="48"
              alt="Lucid"
            />
          </div>
          <p>Please wait...</p>
        </div>
      </div>
      <div className="hide-border">
        <div className="vertical-align-wrap">
          <div className="vertical-align-middle auth-main">
            <div className="auth-box">
              <div className="top">
                <img
                  src={logo}
                  alt="Lucid"
                  style={{ height: '40px', margin: '10px' }}
                />
              </div>
              <div className="card">
                <div className="header">
                  <p className="lead">Welcome to SoVy Web Tool! 👋</p>
                </div>
                <div className="body">
                  <div className="form-auth-small" action="index.html">
                    <div className="form-group">
                      <label className="control-label sr-only">Email</label>
                      <input
                        className="form-control"
                        id="signin-email"
                        placeholder="Email"
                        type="email"
                        /* value={email} */
                        value="user@thememakker.com"
                        onChange={() => ({})}
                      />
                    </div>
                    <div className="form-group">
                      <label className="control-label sr-only">Password</label>
                      <input
                        className="form-control"
                        id="signin-password"
                        placeholder="Password"
                        type="password"
                        /* value={password} */
                        value="secretpassword"
                        onChange={() => ({})}
                      />
                    </div>
                    <div className="form-group clearfix">
                      <label className="fancy-checkbox element-left">
                        <input type="checkbox" />
                        <span>Remember me</span>
                      </label>
                    </div>
                    <a
                      className="btn btn-primary btn-lg btn-block"
                      href="dashboard"
                    >
                      Login
                    </a>
                    <div className="bottom">
                      <span className="helper-text m-b-10">
                        <i className="fa fa-lock"></i> <a>Forgot password?</a>
                      </span>
                      <span>
                        Don't have an account?{' '}
                        <a href="registration">Register</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
