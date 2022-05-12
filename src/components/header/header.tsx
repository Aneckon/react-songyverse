import React, { useState } from 'react';

import { Button, Input, Auth, Dropdown } from '..';

import userLogo from '../image/user/userLogo.svg';

import './header.css';

export const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const [auth, setAuth] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="header">
      {auth ? (
        <div className="header__auth header__auth-name" onClick={() => setDropdown(!dropdown)}>
          <img src={userLogo} alt="" />
          <p>Нікнейм</p>
          <svg
            className={dropdown ? 'header__svg-active' : ' '}
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="15"
            height="10"
            viewBox="0 0 451.847 451.847">
            <g>
              <path
                d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
          <Dropdown dropdown={dropdown} />
        </div>
      ) : (
        <div className="header__auth">
          <Button className="button" click={() => setOpenLogin(true)}>
            Вхід
          </Button>
          <Button className="button" click={() => setOpenRegister(true)}>
            Реєстрація
          </Button>
        </div>
      )}
      <div className="header__search">
        <Input classes="input" name="Пошук" />
      </div>
      <Auth
        clickLogin={() => setOpenLogin(false)}
        clickRegister={() => setOpenRegister(false)}
        openLogin={openLogin}
        openRegister={openRegister}
      />
    </div>
  );
};
