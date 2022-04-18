import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import FullPhoto from './FullPhoto';
import Home from './Home';
const Pages = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/photo/:id" element={<FullPhoto />}></Route>
    </Routes>
  );
};

export default Pages;
