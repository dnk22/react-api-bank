import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="theme-cyan">
      <div>
        <div className="vertical-align-wrap">
          <div className="vertical-align-middle auth-main">
            <div className="auth-box">
              <div className="card">
                <div className="header">
                  <h3>
                    <span className="clearfix title">
                      <span className="number left">404</span>
                      <span className="text">
                        Oops! <br />
                        Page Not Found
                      </span>
                    </span>
                  </h3>
                </div>
                <div className="body">
                  <p>
                    The page you were looking for could not be found, please{' '}
                    <a>contact us</a> to report this issue.
                  </p>
                  <div className="margin-top-30">
                    <a
                      className="btn btn-default"
                      onClick={() => navigate('/')}
                    >
                      <i className="fa fa-arrow-left"></i>&nbsp;
                      <span>Go Back</span>
                    </a>
                    &nbsp;
                    <a className="btn btn-primary" href="dashboard">
                      <i className="fa fa-home"></i>&nbsp;<span>Home</span>
                    </a>
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
export default PageNotFound;
