import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";

class NavigationBar extends React.Component {


    render() {
        return (
            <div id="navigation-bar">
                <Link to="/">
                    <div id="name">
                        Laura Nadolski
                    </div>
                </Link>

                <div id="navigation-bar-button">
                    <Link to="/projects">
                        <button>Projects</button>
                    </Link>
                    <Link to="/about">
                        <button>About Me</button>
                    </Link>
                    <Link to="/contact">
                        <button>Say Hello</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NavigationBar;