import React from 'react'
import Home from './Home'
import Proucd from './Proucd'
import { Routes,Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/info/:Id" element={<Proucd/>}></Route>
      </Routes>
    </>
  );
}

export default App
