import React from 'react';

import { Title, TableMusic } from '..';

import './favorite.css';

export const Favorite = () => {
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
    {
      id: 2,
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
    {
      id: 3,
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
        name: 'Банда (prod. by Rasulov Muzik)',
        author: 'Rasulov Muzik',
      },
      album: 'Альбом',
      data: '10 днів тому',
      time: '2:10',
    },
  ];

  return (
    <div className="favorite">
      <Title classNameTitle="title">Улюблені пісні</Title>
      <TableMusic mokApiTable={mokApiTable} />
    </div>
  );
};
