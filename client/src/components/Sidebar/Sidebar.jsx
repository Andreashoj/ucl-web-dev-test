import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Login from "../../routes/Login/Login";
import DashBoard from "../../routes/Dashboard/DashBoard";
import logo from "../../assets/logo_stackit.svg";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar-nav">
        <img src={logo} />
        <ul>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route path="/Dashboard">
            <DashBoard />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default Sidebar;
