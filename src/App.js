
import React from 'react';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import './App.css';
import  Login  from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
      <Router>
    <Routes>
      <Route path={"/signup"} element={<SignUp/>} />
      <Route path={"/login"} element={<Login/>} />
      
    </Routes>
    </Router>
  );
}

export default App;
