import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home";

const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path='/portfolio' element={ <Home /> } />
    </Routes>
  )
}

export default MyRoutes;
