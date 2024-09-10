import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Myorders from "./components/Orders";
import Todo from "./components/Todo";
import Profile from "./components/Profile";
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Orders" element={<Myorders />} />
        <Route path="/Todo" element = {<Todo/>}/>
        <Route path="/Profile" element = {<Profile/>}/>
      </Routes>
    </Router>
  );
};

export default App;
