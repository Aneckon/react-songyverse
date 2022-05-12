import React from 'react';

import { Title, TableMusic, Slider } from '..';

import './music.css';

export const Music = () => {
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
    <div className="music">
      <div className="music__head">
        <svg
          width="150"
          height="150"
          viewBox="0 0 50 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="25" cy="25.7414" rx="25" ry="25.431" fill="#FEFEFE" />
        </svg>
        <div className="music__head-name">
          <Title classNameTitle="title">Пісня: </Title>
          <p>Автор: </p>
        </div>
      </div>
      <div className="music__main">
        <TableMusic mokApiTable={mokApiTable} />
        <div className="music__main-slider">
          <Title classNameTitle="title">Другі альбоми</Title>
          <Slider />
        </div>
      </div>
    </div>
  );
};
