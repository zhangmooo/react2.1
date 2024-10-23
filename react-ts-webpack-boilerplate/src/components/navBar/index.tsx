import React from 'react';
import { FaBars, FaReact } from 'react-icons/fa'; //从react-icons库中当如一个FaReact的图标组件
import { Link } from 'react-router-dom'; //实现页面跳转但是不触发完整的页面刷新
import { keyframes } from 'styled-components';
import { useState } from 'react';
import { HiX } from 'react-icons/hi'; //页面缩小，导航栏切换的图标
import './styles.css';
const data = [
  {
    label: 'HOME', //显示内容
    to: '/', //链接
  },
  {
    label: 'ABOUT ME',
    to: '/about',
  },
  {
    label: 'SKILLS',
    to: '/skills',
  },
  {
    label: 'CONTACT',
    to: '/contact',
  },
  {
    label: 'PORTFOLIO',
    to: '/portfolio',
  },
  {
    label: 'RESUME',
    to: '/resume',
  },
];

export const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={'/'} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul
          className={`navbar__container__menu ${toggleIcon ? 'active' : ''} `}
        >
          {/*如果toggleIcon为true，则添加active类名，否则添加空字符串*/}
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
