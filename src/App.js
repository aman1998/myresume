import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/aboutPage/About.js';
import Resume from './components/resumePage/Resume.js';
import Portfolio from './components/portfolioPage/Portfolio.js';
import Contacts from './components/contactsPage/Contacts.js'

function App () {
  return (
      <BrowserRouter basename='/portfolio'>
        <Switch>
          <Route path = '/' component = {About} exact/>
          <Route path = '/resume' component = {Resume} exact/>
          <Route path = '/portfolio' component = {Portfolio} exact/>
          <Route path = '/contacts' component = {Contacts} exact/>
        </Switch>
      </BrowserRouter>
    )
}

export default App;
