import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styling/App.css';

import NavigationBar from '../components/NavigationBar';
import ProjectsContainer from './ProjectsContainer';
import AboutPageContainer from './AboutPageContainer';
import ContactPageContainer from './ContactPageContainer';

class App extends Component {
  render() {
    return (
      <div id="main-container">
      <Router>
        <Switch>
          <Route exact path="/" component={NavigationBar}/>
          <Route path="/projects" component={ProjectsContainer}/>
          <Route path="/about" component={AboutPageContainer}/>
          <Route path="/contact" component={ContactPageContainer}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
