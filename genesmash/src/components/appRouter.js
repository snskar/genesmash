// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/home.js';
import Results from '../pages/results.js'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/results" element={<Results />}></Route>
    </Routes>
  );
};

export default AppRouter;
