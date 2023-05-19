import { memo, useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import isEqual from 'react-fast-compare';
import Menu from 'components/Menu';
import { logoutAccount } from 'services/auth';
import { Link, useNavigate } from 'react-router-dom';

function Sider() {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState('menu');
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [themeColor, setThemeColor] = useState('theme-cyan');

  useEffect(() => {
    document.body.classList.add(themeColor);
  }, [themeColor]);

  return (
    <div
      id="left-sidebar"
      className="sidebar"
      style={{ zIndex: 9, userSelect: 'none' }}
    >
      <div className="sidebar-scroll">
        <div className="user-account">
          <img
            src={
              'https://www.wrraptheme.com/templates/lucid/react/static/media/user.46c989fe.png'
            }
            className="rounded-circle user-photo cursor-pointer"
            alt="User Profile"
          />
          <Dropdown>
            <span>Xin Chào,</span>
            <Dropdown.Toggle
              variant="none"
              as="a"
              id="dropdown-basic"
              className="user-name"
            >
              <strong>Alizee Thomas</strong>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-right account">
              <Dropdown.Item onClick={() => navigate('/account')}>
                <i className="icon-user"></i>Thông tin cá nhân
              </Dropdown.Item>
              <li className="divider"></li>
              <Dropdown.Item onClick={logoutAccount}>
                {' '}
                <i className="icon-power"></i>Đăng xuất
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <hr />
          <ul className="row list-unstyled">
            <li className="col-4">
              <small>Sales</small>
              <h6>456</h6>
            </li>
            <li className="col-4">
              <small>Order</small>
              <h6>1350</h6>
            </li>
            <li className="col-4">
              <small>Revenue</small>
              <h6>$2.13B</h6>
            </li>
          </ul>
        </div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <div
              data-toggle="tab"
              className={menuActive === 'menu' ? 'nav-link active' : 'nav-link'}
              onClick={() => setMenuActive('menu')}
            >
              Menu
            </div>
          </li>
          <li className="nav-item">
            <div
              data-toggle="tab"
              className={
                menuActive === 'setting' ? 'nav-link active' : 'nav-link'
              }
              onClick={() => setMenuActive('setting')}
            >
              <i className="icon-settings"></i>
            </div>
          </li>
        </ul>
        <div className="tab-content p-l-0 p-r-0">
          <div
            className={
              menuActive === 'menu' ? 'tab-pane active show' : 'tab-pane'
            }
            id="menu"
          >
            <Menu />
          </div>
          <div
            className={
              menuActive === 'setting'
                ? 'tab-pane p-l-15 p-r-15 show active'
                : 'tab-pane p-l-15 p-r-15'
            }
            id="setting"
          >
            <h6>Choose Mode</h6>
            <ul className="choose-skin list-unstyled">
              <li
                data-theme="white"
                className={
                  document.body.classList.contains('full-dark') ? '' : 'active'
                }
                onClick={() => {
                  setIsLightTheme(!isLightTheme);
                  document.body.classList.remove('full-dark');
                }}
              >
                <div className="white"></div>
                <span>Light</span>
              </li>
              <li
                data-theme="black"
                className={
                  document.body.classList.contains('full-dark') ? 'active' : ''
                }
                onClick={() => {
                  setIsLightTheme(!isLightTheme);
                  document.body.classList.add('full-dark');
                }}
              >
                <div className="black"></div>
                <span>Dark</span>
              </li>
            </ul>
            <hr />
            <h6>Choose Skin</h6>
            <ul className="choose-skin list-unstyled">
              <li
                data-theme="purple"
                className={themeColor === 'theme-purple' ? 'active' : ''}
              >
                <div
                  className="purple"
                  onClick={() => {
                    if (themeColor !== 'theme-purple') {
                      document.body.classList.remove(themeColor);
                    }
                    setThemeColor('purple');
                  }}
                ></div>
                <span>Purple</span>
              </li>
              <li
                data-theme="blue"
                className={themeColor === 'theme-blue' ? 'active' : ''}
              >
                <div
                  className="blue"
                  onClick={() => {
                    if (themeColor !== 'theme-blue') {
                      document.body.classList.remove(themeColor);
                    }
                    setThemeColor('blue');
                  }}
                ></div>
                <span>Blue</span>
              </li>
              <li
                data-theme="cyan"
                className={themeColor === 'theme-cyan' ? 'active' : ''}
              >
                <div
                  className="cyan"
                  onClick={() => {
                    if (themeColor !== 'theme-cyan') {
                      document.body.classList.remove(themeColor);
                    }
                    setThemeColor('cyan');
                  }}
                ></div>
                <span>Cyan</span>
              </li>
              <li
                data-theme="green"
                className={themeColor === 'theme-green' ? 'active' : ''}
              >
                <div
                  className="green"
                  onClick={() => {
                    if (themeColor !== 'theme-green') {
                      document.body.classList.remove(themeColor);
                    }
                    setThemeColor('green');
                  }}
                ></div>
                <span>Green</span>
              </li>
              <li
                data-theme="orange"
                className={themeColor === 'theme-orange' ? 'active' : ''}
              >
                <div
                  className="orange"
                  onClick={() => {
                    if (themeColor !== 'theme-orange') {
                      document.body.classList.remove(themeColor);
                    }
                    setThemeColor('orange');
                  }}
                ></div>
                <span>Orange</span>
              </li>
              <li
                data-theme="blush"
                className={themeColor === 'theme-blush' ? 'active' : ''}
              >
                <div
                  className="blush"
                  onClick={() => {
                    if (themeColor !== 'theme-blush') {
                      document.body.classList.remove(themeColor);
                    }
                    setThemeColor('blush');
                  }}
                ></div>
                <span>Blush</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Sider, isEqual);
