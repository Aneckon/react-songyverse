import React, { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { Title } from '..';

import './panel.css';

interface panel {
  title: string;
  children: ReactNode;
  click(): void;
  linkName: string;
}

export const Panel: FC<panel> = ({ title, children, click, linkName }) => {
  return (
    <div className="popular">
      <div className="popular__hed">
        <Title classNameTitle="popular__title">{title}</Title>
        <p onClick={click}>{linkName}</p>
      </div>
      <div className="popular__content">{children}</div>
    </div>
  );
};
