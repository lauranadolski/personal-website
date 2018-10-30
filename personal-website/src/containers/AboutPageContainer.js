import React from 'react';

class AboutPageContainer extends React.Component {

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
                <div id="about-container">
                    Hello and welcome. 
                    <br></br>
                    <br></br>
                    I'm Laura and I'm a fullstack software engineer based in Brooklyn.

                    <br></br>
                    <br></br>

                    I first discovered web development after working on the product team at <a href="https://www.artsy.net/">Artsy</a>. I bring experience in product development, hiring, and user research at a fast-growing and dynamic NYC startup and a passion for a wide range of intersectional social justice areas.

                    <br></br>
                    <br></br>

                    I love: JavaScript, React, Redux, HTML, CSS, Ruby, Rails.
                    
                    <br></br>
                    <br></br>

                    Find me on <a onClick={this.openGitHub}>GitHub</a> and <a onClick={this.openLinkedin}>LinkedIn</a>.
                </div>
            </div>
        )
    }
}

export default AboutPageContainer;