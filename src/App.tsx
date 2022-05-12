import React from 'react';

import { Route, Routes } from 'react-router-dom';

import {
  Header,
  Home,
  Sidebar,
  Audio,
  Headphone,
  Favorite,
  Music,
  Profile,
  MyMusic,
} from './components';

export const App = () => {
  return (
    <div className="wrraper">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="main__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/headphone" element={<Headphone />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/music/:side" element={<Music />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/mymusic" element={<MyMusic />} />
          </Routes>
          <Audio />
        </div>
      </div>
    </div>
  );
};
