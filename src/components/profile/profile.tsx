import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Panel, User, Popup, Input } from '..';

import userLogo from '../image/user/userLogo.svg';

import './profile.css';

export const Profile = () => {
  const navigate = useNavigate();
  const [frends, setFrends] = useState(false);
  const [recommendations, setRecommendations] = useState(false);
  const [edit, setEdit] = useState(false);

  const userName = 'Нікнейм';

  return (
    <div className="profile">
      <div className="profile__head">
        <div className="profile__head-fon">
          <img
            src="https://techrocks.ru/wp-content/uploads/2021/04/night-3078326_1280-min.jpg"
            alt=""
          />
        </div>
        <div className="profile__head-logo">
          <div className="profile__head-text">
            <h1>{userName}</h1>
          </div>
          <img src={userLogo} alt="" />
          <div className="profile__head-text">
            <button onClick={() => setFrends(true)}>
              <p>100 підписників</p>
            </button>
            <Popup open={frends} setOpen={setFrends} name="Підписники">
              <User />
            </Popup>
          </div>
        </div>
        <Button click={() => navigate(`/music/${userName}`)} className="button__profile">
          Пісні автора
        </Button>
      </div>
      <div className="profile__main">
        <Panel click={() => setEdit(true)} linkName="редагувати" title="Біографія">
          <p>текст..</p>
        </Panel>
        <Popup open={edit} setOpen={setEdit} name="Редагувати">
          <Input name="Текст" classes="auth__input" />
        </Popup>
        <Panel click={() => setRecommendations(true)} linkName="бачити все" title="Рекомендації">
          <User />
          <User />
          <User />
        </Panel>
        <Popup open={recommendations} setOpen={setRecommendations} name="Рекомендації">
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
        </Popup>
      </div>
    </div>
  );
};
