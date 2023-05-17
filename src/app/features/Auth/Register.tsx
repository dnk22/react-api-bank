import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import TextFieldComponent from 'components/TextField';
import { TRegisterFormData } from 'utils/types';
import { registerAccount } from 'services/auth';
import { ToastContainer, toast } from 'react-toastify';

function Register() {
  const navigate = useNavigate();
  const { handleSubmit, control, watch } = useForm<TRegisterFormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      username: '',
      password: '',
      rePassword: '',
    },
  });

  const onSubmit = (data: TRegisterFormData) => {
    delete data.rePassword;
    registerAccount(data).then((res) => {
      const { data } = res;
      if (data.status) {
        localStorage.setItem('token', data.token);
        toast('Tạo tài khoản thành công', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    });
  };

  return (
    <div className="theme-cyan">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div>
        <div className="vertical-align-wrap">
          <div className="vertical-align-middle auth-main">
            <div className="auth-box">
              <div className="card">
                <div className="header">
                  <p className="lead">Tạo mới tài khoản</p>
                </div>
                <div className="body">
                  <form className="form-auth-small ng-untouched ng-pristine ng-valid">
                    <div className="form-group">
                      <TextFieldComponent
                        name="username"
                        control={control}
                        rules={{
                          required: {
                            value: true,
                            message: 'Vui lòng điền tên người dùng',
                          },
                          minLength: {
                            value: 3,
                            message: 'Tên người dùng tổi thiểu 3 ký tự.',
                          },
                        }}
                        label="Tên người dùng"
                        autoComplete="new-password" // Turn off autocomplete
                      />
                    </div>
                    <div className="form-group">
                      <TextFieldComponent
                        name="email"
                        control={control}
                        rules={{
                          required: {
                            value: true,
                            message: 'Vui lòng điền email',
                          },
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Định dạng email không đúng.',
                          },
                        }}
                        type="email"
                        label="Email"
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
                          minLength: {
                            value: 6,
                            message: 'Mật khẩu tổi thiểu 6 ký tự.',
                          },
                        }}
                        type="password"
                        label="Mật khẩu"
                        autoComplete="new-password" // Turn off autocomplete
                      />
                    </div>
                    <div className="form-group">
                      <TextFieldComponent
                        name="rePassword"
                        control={control}
                        rules={{
                          required: {
                            value: true,
                            message: 'Vui lòng điền lại mật khẩu',
                          },
                          validate: (value: string) =>
                            value === watch('password') ||
                            'Không trùng với mật khẩu, vui lòng nhập lại',
                        }}
                        type="password"
                        label="Nhập lại mật khẩu"
                        autoComplete="new-password" // Turn off autocomplete
                      />
                    </div>
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Đăng ký
                    </button>
                    <div className="bottom">
                      <span className="helper-text">
                        Đã có tài khoản?{' '}
                        <Link style={{ color: '#007bff' }} to={'/auth/login'}>
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
export default Register;
