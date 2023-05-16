import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app/assets/scss/main.scss';
import './app/assets/scss/color_skins.scss';
import 'font-awesome/scss/font-awesome.scss';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
