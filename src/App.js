import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { DashBoard } from "./components/DashBoard";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const Item = styled.li`
  color: palegreen;
  flex: 1;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Wrapper>
            <Item>
              <Link to="/">Home</Link>
            </Item>
            <Item>
              <Link to="/about">About</Link>
            </Item>
            <Item>
              <Link to="/dashboard">Dashboard</Link>
            </Item>
          </Wrapper>
          <hr />
          <Switch>
            <Route exact={true} path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <DashBoard />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
