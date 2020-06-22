import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import RepoView from "./RepoView";
import MainView from "./MainView";

import "./App.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  padding: 15px;
  margin: 0 auto;
  background-color: #33658a;
  color: #f6ae2d;
`;
const LinkHome = styled.div`
  color: #f26419;
  font-size: 2rem;
  text-align: center;
  text-decoration: underline;
  padding: 2rem;
  background-color: #2f4858;
`;

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Link to={`${process.env.PUBLIC_URL}/`}>
          <LinkHome>Home page</LinkHome>
        </Link>
        <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} exact>
          <MainView />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/repos/:currentRepoId`}>
          <RepoView />
        </Route>
        <Redirect from='*' to={`${process.env.PUBLIC_URL}`}/>
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;
