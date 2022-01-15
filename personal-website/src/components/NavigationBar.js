import React from 'react';

class NavigationBar extends React.Component {

    showContactPage = () => {
        this.props.toggleNavigation("contact");
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
                    <button
                    id="name"
                    onClick={this.showHome}>
                        Laura Nadolski
                    </button>
                </div>

                <div id="navigation-bar-right-side-links-container">
                    <button
                    onClick={this.showContactPage} 
                    className="navigation-bar-link-right-side">
                        Say Hello
                    </button>
                    <button 
                    onClick={this.showAbout}className="navigation-bar-link-right-side">
                        About
                    </button>
                </div>
            </div>
            
        )
    }
}

export default NavigationBar;