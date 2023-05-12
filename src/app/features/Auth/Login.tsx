import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import human from '../../assets/images/human.png';
import lamp from '../../assets/images/lamp.png';
import {
  Button,
  FilledInput,
  FormControl,
  Grow,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Slide,
  TextField,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './auth.scss';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container-content">
      <Grid container>
        <Grid xs={12} md={6}>
          <div className="h-full left"></div>
        </Grid>
        <Grid xs={12} md={6}>
          <div className="flex justify-center items-center  h-screen flex-col">
            <Grow in={true} timeout={1000}>
              <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left title antialiased ">
                Welcome to SoVy Web Tool! 👋
              </h2>
            </Grow>
            <div
              className="hidden max-sm:flex mb-[20px]"
              style={{ columnGap: 10 }}
            >
              <a>Đăng nhập</a>
              <a>Đăng ký</a>
            </div>
            <div className="max-sm:bg-white rounded-[10px] p-[20px] max-sm:w-11/12 md:w-[400px] flex flex-col max-sm:drop-shadow-xl">
              <Slide direction="left" in={true} timeout={700} mountOnEnter>
                <TextField
                  id="userName"
                  label="Tên người dùng"
                  variant="standard"
                />
              </Slide>
              <Slide direction="left" in={true} timeout={700} mountOnEnter>
                <FormControl variant="filled">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(true)}
                          onMouseDown={(event) => event.preventDefault()}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Slide>
              <span className="flex text-gray-700 dark:text-gray-600 text-xs mt-4 mb-[20px] justify-end">
                Quên mật khẩu?
              </span>
              <Button variant="contained">Đăng nhập</Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Login;
