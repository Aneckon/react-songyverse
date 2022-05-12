import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './tags.css';

interface tags {
  children: string;
}

export const Tags: FC<tags> = ({ children }) => {
  return <NavLink to='tegs' className="tags">{children}</NavLink>;
};
