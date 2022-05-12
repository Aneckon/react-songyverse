import React, { useState } from 'react';

import { TableMusic, Title, Button, Popup, Input } from '..';

import './myMusic.css';

export const MyMusic = () => {
  const [myMusic, setMyMusic] = useState(false);
  const mokApiTable = [
    {
      id: 1,
      albumName: {
        img: (
          <svg
            width="50"
            height="52"
            viewBox="0 0 50 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="25" cy="25.7414" rx="25" ry="25.431" fill="#FEFEFE" />
          </svg>
        ),
        name: 'Назва',
        author: 'Автор',
      },
      album: 'Альбом',
      data: '10 днів тому',
      time: '2:10',
    },
  ];
  return (
    <div className="myMusic">
      <div className="myMusic__head">
        <Title classNameTitle="title">Мої пісні</Title>
        <Button click={() => setMyMusic(true)} className="button">
          Добавити пісню
        </Button>
      </div>
      <Popup name="Добавити пісню" open={myMusic} setOpen={setMyMusic}>
        <Input name="Назва пісні" classes="auth__input" />
        <Input name="Автор пісні" classes="auth__input" />
        <Input name="Альбом пісні" classes="auth__input" />
        <Input name="Силка на пісню" classes="auth__input" />
        <Button className='button'>Добавити пісню</Button>
      </Popup>
      <TableMusic mokApiTable={mokApiTable}></TableMusic>
    </div>
  );
};
