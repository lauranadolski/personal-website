import React, { Component } from 'react';
import '../styling/App.css';

import NavigationBar from '../components/NavigationBar';
import ProjectsContainer from './ProjectsContainer';
import AboutPageContainer from './AboutPageContainer';
import ContactPageContainer from './ContactPageContainer';

class App extends Component {
  state = {
    navigation: 'home',
    projects: [
      { name: "iSim (Intersectionality Simulator)",
        exampleType: "Demo",
        exampleURL: "https://youtu.be/jWX9PgbBl50",
        gitHubURL: "https://github.com/lauranadolski/iSim/tree/master/i-sim",
        description: "This is a description of iSim."
      },
      { name: "Surge Watcher",
        exampleType: "Demo",
        exampleURL: "https://youtu.be/GA4TFB7gCeg",
        gitHubURL: "https://github.com/lauranadolski/Surge-Watcher",
        description: "This is a description of Surge Watcher."
      },
      { name: "Voice Dodger",
        exampleType: "Demo",
        exampleURL: "https://youtu.be/wSgQhZ1Wby4",
        gitHubURL: "https://github.com/lauranadolski/mod-3-project/blob/master/GameFiles/README.md",
        description: "This is a description of Voice Dodger."
      }
    ]
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
        <ProjectsContainer 
        toggleNavigation={this.toggleNavigation}
        projects={this.state.projects} 
        />
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