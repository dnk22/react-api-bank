import { memo } from 'react';
import { Nav } from 'react-bootstrap';
import isEqual from 'react-fast-compare';
import { Link } from 'react-router-dom';
import { TMenuSideBar, menuSideBar } from 'utils/constants/menu.constant';

function Menu() {
  const isActiveRoute = (path: string) => {
    return true;
  };
  function activeMenuTabContainer(id: string) {
    const parents = document.getElementById('main-menu');
    const activeMenu = document.getElementById(id);

    for (let index = 0; index < parents?.children?.length; index++) {
      if (parents?.children[index].id !== id) {
        parents?.children[index].classList.remove('active');
        parents?.children[index]?.children[1]?.classList.remove('in');
      }
    }
    setTimeout(() => {
      activeMenu?.classList.toggle('active');
      activeMenu?.children[1].classList.toggle('in');
    }, 10);
  }
  function renderMenu(menu: TMenuSideBar[]) {
    return menu.map((item: TMenuSideBar) => {
      return (
        <li className="" id={item.key} key={item.key}>
          <Link
            to={item.key}
            className={
              item.children
                ? 'cursor-pointer rounded-[10px] has-arrow'
                : 'cursor-pointer rounded-[10px]'
            }
          >
            <i className={item.icon}></i> <span>{item.name}</span>
          </Link>
        </li>
      );
    });
  }

  return (
    <Nav id="left-sidebar-nav" className="sidebar-nav">
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
