import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Home from './components/Home';
import Friend from './components/Friend';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Container className="my-5">
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/user/:id/friends' exact component={Friend}/>
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  )
}

