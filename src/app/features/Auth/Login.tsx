import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextFieldComponent from 'components/TextField';
import { useForm } from 'react-hook-form';
import { TLoginFormData } from 'utils/types';
import { loginAccount } from 'services/auth';

function Login() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<TLoginFormData>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (data: TLoginFormData) => {
    loginAccount(data).then((res) => {
      const { data } = res;
      if (data.status) {
        localStorage.setItem('token', data.token);
        navigate('/');
      }
    });
  };
  return (
    <div className="theme-cyan">
      <div className="hide-border">
        <div className="vertical-align-wrap">
          <div className="vertical-align-middle auth-main">
            <div className="auth-box">
              <div className="card" ref={containerRef}>
                <div className="header">
                  <p className="lead">Welcome to SoVy Web Tool! 👋</p>
                </div>
                <div className="body">
                  <div className="form-auth-small">
                    <div className="form-group">
                      <TextFieldComponent
                        name="username"
                        control={control}
                        rules={{
                          required: {
                            value: true,
                            message: 'Vui lòng điền tên người dùng',
                          },
                        }}
                        type='text'
                        label="Tên người dùng"
                      />
                    </div>
                    <div className="form-group">
                      <TextFieldComponent
                        name="password"
                        control={control}
                        rules={{
                          required: {
                            value: true,
                            message: 'Vui lòng điền mật khẩu',
                          },
                        }}
                        type='password'
                        label="Mật khẩu"
                      />
                    </div>
                    <div className="form-group clearfix">
                      <label className="fancy-checkbox element-left">
                        <input type="checkbox" />
                        <span>Ghi nhớ tôi</span>
                      </label>
                    </div>
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Đăng nhập
                    </button>
                    <div className="bottom">
                      <span className="helper-text m-b-10">
                        <i className="fa fa-lock"></i>{' '}
                        <Link to={'/auth/recovery'}>Quên mật khẩu?</Link>
                      </span>
                      <span>
                        Không có tài khoản?{' '}
                        <Link
                          style={{ color: '#007bff' }}
                          to={'/auth/registration'}
                        >
                          Đăng ký ngay
                        </Link>
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
