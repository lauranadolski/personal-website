import React from 'react';

class NavigationBar extends React.Component {

    showContactPage = () => {
        this.props.toggleNavigation("contact");
    }

    showProjects = () => {
        this.props.toggleNavigation("projects"); 
    }
    
    showAbout = () => {
        this.props.toggleNavigation("about"); 
    }

    showHome = () => {
        this.props.toggleNavigation("home"); 
    }


    render() {
        return (
            <div id="navigation-bar">
                <div id="name-container">
                    <a
                    id="name"
                    onClick={this.showHome}>
                        Laura Nadolski
                    </a>
                </div>

                <div id="navigation-bar-right-side-links-container">
                    <a
                    onClick={this.showContactPage} 
                    className="navigation-bar-link-right-side">
                        Say Hello
                    </a>
                    <a 
                    onClick={this.showAbout}className="navigation-bar-link-right-side">
                        About
                    </a>
                </div>
            </div>
            
        )
    }
}

export default NavigationBar;