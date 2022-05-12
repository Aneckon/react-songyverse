import React from 'react';
import { NavLink } from 'react-router-dom';

import userLogo from '../image/user/userLogo.svg';
import userAdd from '../image/user/user.svg';

import './user.css';

export const User = () => {
  return (
    <div className="user">
      <div className="user__content">
        <NavLink to="frends">
          <img src={userLogo} alt="" />
        </NavLink>
        <div className="user__name">
          <NavLink to="frends">
            <h4>Нікнейм</h4>
          </NavLink>
          <p>100 підписників</p>
        </div>
      </div>
      <div className="user__add">
        <img src={userAdd} alt="" />
      </div>
    </div>
  );
};
