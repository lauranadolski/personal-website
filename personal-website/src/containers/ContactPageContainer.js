import React from 'react';

class ContactPageContainer extends React.Component {


    openInNewTab = (targetURL) => {
        let win = window.open(targetURL, '_blank');
        win.focus();
    }

    clickHelper = () => {
        this.openInNewTab("https://www.linkedin.com/in/lauranadolski/")
    }


    render() {
        return (
            <div>
                <div id="contact-container">
                    mail@lauranadolski.com
                    <br></br>
                    <br></br>
                    <div onClick={this.clickHelper}>LinkedIn</div>
                </div>
            </div>
        )
    }
}

export default ContactPageContainer;