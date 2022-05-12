import React, { FC } from 'react';

import './title.css';

interface title {
  children: string;
  classNameTitle: string
}

export const Title: FC<title> = ({ children, classNameTitle }) => {
  return <h1 className={classNameTitle}>{children}</h1>;
};
