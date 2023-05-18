import Menu from 'components/Menu';
import { memo, useState } from 'react';
import { Dropdown,  } from 'react-bootstrap';
import isEqual from 'react-fast-compare';

function Sider() {
  const [menuActive, setMenuActive] = useState('menu');

  return (
    <div id="left-sidebar" className="sidebar" style={{ zIndex: 9 }}>
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
            <span>Welcome,</span>
            <Dropdown.Toggle
              variant="none"
              as="a"
              id="dropdown-basic"
              className="user-name"
            >
              <strong>Alizee Thomas</strong>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-right account">
              <Dropdown.Item href="profilev2page">
                <i className="icon-user"></i>My Profile
              </Dropdown.Item>
              <Dropdown.Item href="appinbox">
                {' '}
                <i className="icon-envelope-open"></i>Messages
              </Dropdown.Item>
              <Dropdown.Item>
                {' '}
                <i className="icon-settings"></i>Settings
              </Dropdown.Item>
              <li className="divider"></li>
              <Dropdown.Item href="login">
                {' '}
                <i className="icon-power"></i>Logout
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
                menuActive === 'settings' ? 'nav-link active' : 'nav-link'
              }
              onClick={() => setMenuActive('settings')}
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
        </div>
      </div>
    </div>
  );
}
export default memo(Sider, isEqual);
