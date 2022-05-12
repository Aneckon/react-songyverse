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
    <div className="panel">
      <div className="panel__hed">
        <Title classNameTitle="panel__title">{title}</Title>
        <p onClick={click}>{linkName}</p>
      </div>
      <div className="panel__content">{children}</div>
    </div>
  );
};
