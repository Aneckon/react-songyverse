import React, { useState } from 'react';

import { Title, Card, Panel, User, Tags, Popup } from '..';

import './home.css';

export const Home = () => {
  const [popularGenres, setPopularGenres] = useState(false);
  const [authorGenres, setAuthorGenres] = useState(false);

  return (
    <div className="home">
      <div className="home__content">
        <Title classNameTitle="title">Топ музика тижня</Title>
        <div className="home__card-list">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="home__popilar">
          <Panel click={() => setAuthorGenres(true)} linkName="бачити все" title="Популярні автори">
            <User />
            <User />
            <User />
          </Panel>
          <Popup open={authorGenres} setOpen={setAuthorGenres} name="Популярні автори">
            <User />
          </Popup>
          <Panel click={() => setPopularGenres(true)} linkName="бачити все" title="Популярні жанри">
            <div className="home__tags">
              <Tags>Класика</Tags>
            </div>
          </Panel>
          <Popup open={popularGenres} setOpen={setPopularGenres} name="Популярні жанри">
            <Tags>Класика</Tags>
          </Popup>
        </div>
      </div>
    </div>
  );
};
