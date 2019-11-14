import React from "react";
import "./App.scss";
import Accordion from "./components/Accordion/Accordion.jsx";
import Button from "./components/Button/Button.jsx";
import Form from "./components/Form/Form.jsx";
import Graph from "./components/Graph/Graph.jsx";
import List from "./components/List/List.jsx";
import Modal from "./components/Modal/Modal.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <nav className="nav-wrapper">
          <Navigation />
          <Sidebar />
        </nav>
      </UserContextProvider>
    </Router>
  );
}

export default App;
