import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class NavigationBar extends React.Component {


    render() {
        return (
            <Router>
                <div id="navigation-bar">
                    <Link to="/">
                        <div id="name">Laura Nadolski</div>
                    </Link>

                    <Link to="/projects">
                        <div className="navigation-bar-link-right-side">Projects</div>
                    </Link>
                    <Link to="/about">
                        <div className="navigation-bar-link-right-side">About Me</div>
                    </Link>
                    <Link to="/contact">
                        <div className="navigation-bar-link-right-side">Say Hello</div>
                    </Link>
                </div>
            </Router>
        )
    }
}

export default NavigationBar;