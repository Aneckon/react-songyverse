import React from 'react';

import { Slider, Title } from '..';

import './headphone.css';

export const Headphone = () => {
  return (
    <div className="headphone">
      <div className="headphone__albums">
        <Title classNameTitle="title">Альбоми</Title>
        <Slider />
      </div>
      <div className="headphone__playlists">
        <Title classNameTitle="title">Плейлисти</Title>
        <Slider />
      </div>
    </div>
  );
};
