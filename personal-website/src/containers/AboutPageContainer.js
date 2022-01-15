import React from 'react';

class AboutPageContainer extends React.Component {

    render() {
        return (
            <div>
                <div id="about-container">
                    Hello and welcome <span role="img" aria-label="waving hand">👋</span> 
                    <br></br>
                    <br></br>
                    I'm Laura. I'm a software engineer at <a href="https://mailchimp.com/" target="_blank" rel="noreferrer noopener"> Mailchimp</a>.
                    <br></br>
                    <br></br>

                    Find me on <a href="https://www.linkedin.com/in/lauranadolski/" target="_blank" rel="noreferrer noopener">LinkedIn</a>.
                </div>
            </div>
        )
    }
}

export default AboutPageContainer;