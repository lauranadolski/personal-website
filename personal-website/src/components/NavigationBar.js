import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class NavigationBar extends React.Component {


    render() {
        return (
            <Router>
                <div id="navigation-bar">
                    <Link to="/">
                        <button id="name">Laura Nadolski</button>
                    </Link>

                    <Link to="/projects">
                        <button className="navigation-bar-button">Projects</button>
                    </Link>
                    <Link to="/about">
                        <button className="navigation-bar-button">About Me</button>
                    </Link>
                    <Link to="/contact">
                        <button className="navigation-bar-button">Say Hello</button>
                    </Link>
                </div>
            </Router>
        )
    }
}

export default NavigationBar;