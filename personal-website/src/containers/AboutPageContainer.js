import React from 'react';

class AboutPageContainer extends React.Component {

    openInNewTab = (targetURL) => {
        let win = window.open(targetURL, '_blank');
        win.focus();
    }

    openLinkedIn = () => {
        this.openInNewTab("https://www.linkedin.com/in/lauranadolski/")
    }

    openGitHub = () => {
        this.openInNewTab("https://github.com/lauranadolski");
    }

    openArtsy = () => {
        this.openInNewTab("https://www.artsy.net/");
    }

    openGreenhouse = () => {
        this.openInNewTab("https://www.greenhouse.io/");
    }


    render() {
        return (
            <div>
                <div id="about-container">
                    Hello and welcome 👋 
                    <br></br>
                    <br></br>
                    I'm Laura and I'm a fullstack software engineer at <a onClick={this.openGreenhouse}>Greenhouse Software</a>.

                    <br></br>
                    <br></br>

                    {`Experienced with: JavaScript, React, Styled Components, Ruby, Rails, PostgreSQL, HTML, CSS, SASS, GitHub Actions, Docker, Git & GitHub, Craft CMS, RSpec, Jest, Flow, JIRA, and more~`} 
                    
                    <br></br>
                    <br></br>

                    Find me on <a onClick={this.openGitHub}>GitHub</a> and <a onClick={this.openLinkedIn}>LinkedIn</a>.
                </div>
            </div>
        )
    }
}

export default AboutPageContainer;