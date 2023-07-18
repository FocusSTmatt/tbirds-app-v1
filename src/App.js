import './App.css';
import React, {useState, useContext} from 'react';
import MobileNav from './components/MobileNav';
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Registration from './pages/Registration';
import Login from './pages/Login';
import { AuthContext } from "./helpers/AuthContext"

function App() {

  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
    <BrowserRouter>
      <div className="App">
        <MobileNav />
        <Routes>
          <Route path="/"exact element={<Home />} /> 
          <Route path="/registration"exact element={<Registration />} /> 
          <Route path="/login"exact element={<Login />} /> 
        </Routes>
      </div>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
