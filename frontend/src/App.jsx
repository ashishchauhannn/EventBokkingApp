import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './Components/HomePage/HomePage.jsx';
import ListingPage from './Components/ListingPage/ListingPage.jsx';
const App = () => {
  return (
    <div className='App'>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/listing" element={<ListingPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
