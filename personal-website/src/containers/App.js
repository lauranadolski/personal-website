import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styling/App.css';

import NavigationBar from '../components/NavigationBar';
import ProjectsContainer from './ProjectsContainer';
import AboutPageContainer from './AboutPageContainer';
import ContactPageContainer from './ContactPageContainer';

class App extends Component {
  state = {
    navigation: 'home'
  }

  chooseComponentToRender = () => {
    if (this.state.navigation === "contact") {
      return (
        <ContactPageContainer toggleNavigation={this.toggleNavigation} />
      )
    } else if (this.state.navigation === "about") {
      return (
        <AboutPageContainer toggleNavigation={this.toggleNavigation} />
      )
    } else if (this.state.navigation === "projects") {
      return (
        <ProjectsContainer toggleNavigation={this.toggleNavigation} />
      )
    }
  }

  toggleNavigation = (destinationPage) => {
    this.setState({
      navigation: destinationPage
    })
  }

  render() {
    return (
      <div>
        {this.chooseComponentToRender()}
        <NavigationBar toggleNavigation={this.toggleNavigation}/>
      </div>
    );
  }
}

export default App;



// render() {
//   return (
//     <div>
//     <Router>
//       <Switch>


//         <Route path="/projects" component={ProjectsContainer}/>
//         <Route path="/about" component={AboutPageContainer}/>
//         <Route path="/contact" component={ContactPageContainer}/>
      
//       </Switch>
//     </Router>
//     <NavigationBar />
//     </div>
//   );
// }