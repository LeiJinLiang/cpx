import React from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { DashBoard } from "./components/DashBoard";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
   max-width: 960px;
   margin : 0 auto;
   display : flex; 
   flex-wrap:wrap;
`


const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding:20px;
`;

const Item = styled.li`
  color: palegreen;
  flex: 1;
`;

const Column = styled.div`
   --columns : 12;
   --width : 0;
   flex-basis: calc(var(--width)/var(--columns)*100%);
   background-color: pink;
   border: LavenderBlush 2px solid;
   border-radius: 8px;
   padding: 16px;
`
const Header = styled(Column)`
  --width: 12;
  height : 8rem;
`

const Main = styled(Column)`
  --width: 8;
  height : 64rem;
`
const Aside = styled(Column)`
  --width: 4;
`

function App() {
  return (
    <Container>
      <Header>
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
      </Header>
      <Main>
        .content
      </Main>
      <Aside>
        .sidebar
      </Aside>
    </Container>
  );
}

export default App;
