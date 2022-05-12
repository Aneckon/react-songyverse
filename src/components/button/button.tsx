import React, { FC } from 'react';

import './button.css';

interface button {
  children: string;
  click?(): void;
  className: string
}

export const Button: FC<button> = ({ children, click, className }) => {
  return (
    <button onClick={click} className={className}>
      {children}
    </button>
  );
};
