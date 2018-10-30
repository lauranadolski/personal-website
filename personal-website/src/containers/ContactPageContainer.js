import React from 'react';

class ContactPageContainer extends React.Component {

    openInNewTab = (targetURL) => {
        let win = window.open(targetURL, '_blank');
        win.focus();
    }

    openLinkedin = () => {
        this.openInNewTab("https://www.linkedin.com/in/lauranadolski/")
    }

    openGitHub = () => {
        this.openInNewTab("https://github.com/lauranadolski");
    }


    render() {
        return (
            <div>
                <div id="contact-container">
                    Find me on <a onClick={this.openGitHub}>GitHub</a> and <a onClick={this.openLinkedin}>LinkedIn</a>. 
                    <br></br>
                    <br></br>
                    <a href="mailto: heylorra@gmail.com"> Shoot me an email.</a>
                </div>
            </div>
        )
    }
}

export default ContactPageContainer;