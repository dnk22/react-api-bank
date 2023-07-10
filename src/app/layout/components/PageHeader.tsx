import { memo, useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import isEqual from 'react-fast-compare';

function PageHeader() {
  const [toggleMenu, setToggleMenu] = useState(true);

  const onToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    if (!toggleMenu) {
      document.body.classList.remove('layout-fullwidth');
    } else {
      document.body.classList.add('layout-fullwidth');
    }
  };

  return (
    <div className="block-header">
      <div className="row">
        <div className="col-lg-5 col-md-6 col-sm-12">
          <h2>
            <a
              href="toggle"
              className="btn btn-xs btn-link btn-toggle-fullwidth"
              onClick={(e) => {
                e.preventDefault();
                onToggleMenu();
              }}
            >
              <i
                className={
                  toggleMenu ? `fa fa-arrow-left` : 'fa fa-arrow-right'
                }
              ></i>
            </a>{' '}
            {'Backdoor'}
          </h2>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="dashboard">
                <i className="icon-home"></i>
              </a>
            </li>
            {/* {Breadcrumb.map((item, index) => {
              return (
                <li key={item.name + index} className="breadcrumb-item active">
                  <a href={item.navigate ? item.navigate : null}>{item.name}</a>
                </li>
              );
            })} */}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default memo(PageHeader, isEqual);
