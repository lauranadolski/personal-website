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
        descriptionSummary: "Interactive and dynamic 3D modeling web app to map out user’s intersectional identity as a custom 3D rendering.",
        descriptionBulletPoints: [
          "Built out Rails back-end API and React/Redux front-end",
          "Leveraged 3D javascript library Three.js through react-three-renderer",
          "Wrote all styling using vanilla CSS only"
        ]
      },
      { name: "Surge Watcher",
        exampleType: "Demo",
        exampleURL: "https://youtu.be/GA4TFB7gCeg",
        gitHubURL: "https://github.com/lauranadolski/Surge-Watcher",
        descriptionSummary: "CLI application to ping Lyft API for real-time ride pricing estimates & surge status from user’s ride origin and destination.",
        descriptionBulletPoints: [
          "Wrote entire application in Ruby",
          "Utilized Lyft’s API to ping for ride pricing estimates in real time",
          "Incorporated Geotracker gem into Lyft API pings, allowing the user flexibility to input a wide range of address formats"
        ]
      },
      { name: "Voice Dodger",
        exampleType: "Demo",
        exampleURL: "https://youtu.be/wSgQhZ1Wby4",
        gitHubURL: "https://github.com/lauranadolski/mod-3-project/blob/master/GameFiles/README.md",
        descriptionSummary: "Single-player obstacle dodging game using voice recognition commands to control sprite movement.",
        descriptionBulletPoints: [
          "Constructed game logic and visuals entirely in vanilla JavaScript",
          "Incorporated Annyang voice recognition JavaScript library to control game logic using user’s voice commands in real time",
          "Built all game visuals using vanilla CSS only"
        ]
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