import React, { FC, useState } from 'react';

import { Input, Button } from '..';

import './auth.css';

interface auth {
  openLogin: boolean;
  openRegister: boolean;
  clickLogin(): void;
  clickRegister(): void;
}

export const Auth: FC<auth> = ({ openLogin, openRegister, clickLogin, clickRegister }) => {
  // const [nickname, setNickname] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  return (
    <form
      className={
        openLogin
          ? 'auth login auth__open'
          : 'auth login' && openRegister
          ? 'auth register auth__open'
          : 'auth register'
      }>
      <div className="auth__hed">
        <h2>{openLogin ? 'Вхід' : 'Реєстрація'}</h2>
        <svg
          onClick={openLogin ? clickLogin : clickRegister}
          width="100"
          height="101"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="28" y="30.1799" width="42" height="39.2339" fill="#E95050" />
          <path
            d="M95.1652 40.0346H88.9611C88.0286 36.6128 86.6215 33.1274 84.8126 30.0249L89.3802 25.4531C91.3792 23.449 91.3795 20.2027 89.3802 18.1983L82.3027 11.1039C81.3426 10.1414 80.0405 9.60145 78.6829 9.60145C77.3252 9.60145 76.0228 10.1424 75.0631 11.1053L70.4501 15.6405C67.2733 13.752 63.8231 12.2886 60.0688 11.3322V5.13264C60.0688 2.29805 57.9558 0 55.1282 0H45.1189C42.2913 0 39.9319 2.29805 39.9319 5.13264V11.3322C36.5189 12.2506 33.125 13.6347 30.0533 15.4154L25.8253 11.1594C23.8264 9.15526 20.5929 9.15526 18.5939 11.1594L11.5202 18.2554C9.52085 20.2595 9.5229 23.5095 11.5222 25.514L15.6577 29.6444C13.7403 32.8516 12.2564 36.2706 11.2857 40.0346H5.23312C2.40581 40.0346 0 42.3621 0 45.1966V55.232C0 58.0666 2.40581 60.2229 5.23312 60.2229H11.2444C12.198 63.9869 13.6656 67.4808 15.5625 70.6881L11.4707 74.8256C9.47136 76.8298 9.47136 80.0975 11.4707 82.102L18.5482 89.2066C19.5478 90.2088 20.8581 90.7142 22.168 90.7142C23.4779 90.7142 24.7885 90.2153 25.7878 89.2131L29.8902 85.0677C33.0073 86.8942 36.1773 88.3139 39.9315 89.2484V95.296C39.9315 98.1306 42.2909 100.6 45.1182 100.6H55.1275C57.9548 100.6 60.0681 98.1306 60.0681 95.296V89.2487C63.8224 88.2759 67.391 86.7792 70.6122 84.8435L75.0712 89.2692C76.0709 90.2715 77.4033 90.7728 78.7136 90.7728C80.0238 90.7728 81.3453 90.2715 82.3447 89.2692L89.428 82.1735C91.4273 80.1694 91.4304 76.9194 89.4307 74.915L84.9071 70.3076C86.6962 67.2057 88.086 63.9872 89.0017 60.2233H95.1648C97.9921 60.2233 100 58.0669 100 55.2323V45.197C100 42.3621 97.9925 40.0346 95.1652 40.0346ZM65.0228 50.2906C65.0228 58.5271 58.3391 65.228 50.1237 65.228C41.9083 65.228 35.2247 58.5271 35.2247 50.2906C35.2247 42.0541 41.9083 35.3533 50.1237 35.3533C58.3391 35.3533 65.0228 42.0538 65.0228 50.2906Z"
            fill="#E95050"
          />
          <rect x="45" y="25" width="10" height="50" fill="white" />
          <rect x="25" y="55" width="10" height="50" transform="rotate(-90 25 55)" fill="white" />
        </svg>
      </div>
      {openLogin ? (
        <div className="auth__main">
          <Input name="Емайл" classes="auth__input" />
          <Input name="Пароль" classes="auth__input" />
        </div>
      ) : (
        <div className="auth__main">
          <Input name="Нікнейм" classes="auth__input" />
          <Input name="Емайл" classes="auth__input" />
          <Input name="Пароль" classes="auth__input" />
        </div>
      )}
      {openLogin ? <Button className='button'>Вхід</Button> : <Button className='button'>Реєстрація</Button>}
    </form>
  );
};
