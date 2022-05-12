import React, { FC } from 'react';

import './input.css';

interface input {
  name: string;
  classes: string;
}

export const Input: FC<input> = ({ name, classes }) => {
  return <input placeholder={name} className={classes} />;
};
