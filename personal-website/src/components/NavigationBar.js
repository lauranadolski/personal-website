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
                    <div 
                    id="name"
                    onClick={this.showHome}>
                        Laura Nadolski
                    </div>
                </div>

                <div id="navigation-bar-right-side-links-container">
                    <div 
                    onClick={this.showProjects}className="navigation-bar-link-right-side">
                        Projects
                    </div>
                    <div 
                    onClick={this.showAbout}className="navigation-bar-link-right-side">
                        About
                    </div>
                    <div
                    onClick={this.showContactPage} 
                    className="navigation-bar-link-right-side">
                        Say Hello
                    </div>
                </div>
            </div>
            
        )
    }
}

export default NavigationBar;