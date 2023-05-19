import { Collapse, Slide } from '@mui/material';
import { memo } from 'react';
import { Nav } from 'react-bootstrap';
import isEqual from 'react-fast-compare';
import { useNavigate } from 'react-router-dom';
import { TMenuSideBar, menuSideBar } from 'utils/constants/menu.constant';
import './styles.css';

function Menu() {
  const navigate = useNavigate();
  function activeMenuTabContainer(id: string) {
    const activeMenu = document.getElementById(id);
    setTimeout(() => {
      activeMenu?.classList.toggle('active');
      activeMenu?.children[1].classList.toggle('collapse');
      activeMenu?.children[1].classList.toggle('in');
    }, 10);
  }

  function handleOnMenuItemClick(item: TMenuSideBar) {
    if (item?.children) {
      activeMenuTabContainer(item.key);
    } else {
      navigate(item.key);
    }
  }

  function renderMenu(menu: TMenuSideBar[]) {
    return menu.map((item: TMenuSideBar, index: number) => {
      const isChild = item.key.split('/').length - 1 > 1;
      return (
        <Slide direction="right" in={true} timeout={200 * index} key={item.key}>
          <li className={isChild ? 'ml-4' : ''} id={item.key} key={item.key}>
            <div
              id="menu-item"
              className={
                item.children
                  ? 'cursor-pointer rounded-[10px] has-arrow'
                  : 'cursor-pointer rounded-[10px]'
              }
              onClick={() => handleOnMenuItemClick(item)}
            >
              <i className={item.icon} style={{ marginRight: 5 }}></i>{' '}
              <span>{item.name}</span>
            </div>
            {item?.children && item.children.length && (
              <ul className="collapse">{renderMenu(item.children)}</ul>
            )}
          </li>
        </Slide>
      );
    });
  }

  return (
    <Nav id="left-sidebar-nav" className="sidebar-nav select-none">
      <ul id="main-menu" className="metismenu">
        {renderMenu(menuSideBar)}
      </ul>
    </Nav>
  );
}
export default memo(Menu, isEqual);

// return (
//     <li id={item.key} className="" key={item.key}>
//       <a
//         href="#!"
//         className="has-arrow"
//         onClick={(e) => {
//           e.preventDefault();
//           activeMenuTabContainer('wallet-management');
//         }}
//       >
//         <i className="icon-grid"></i> <span>Quản lý ví</span>
//       </a>
//       <ul className="collapse in">
//         <li className={isActiveRoute('/appinbox') ? 'active' : ''}>
//           <Link to="appinbox">Inbox</Link>
//         </li>
//         <li className={isActiveRoute('/appinbox') ? 'active' : ''}>
//           <Link to="appchat">Chat</Link>
//         </li>
//       </ul>
//     </li>
//   );
