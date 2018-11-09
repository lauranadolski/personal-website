import React from 'react';

class ProjectCard extends React.Component {

    render() {
        return (
        <div className="project-card">
            <h1 className="project-title">{this.props.name}</h1>
            <a target="_blank" href={this.props.gitHubURL}>GitHub</a>
            |
            <a target="_blank" href={this.props.exampleURL}>{this.props.exampleType}</a>
            <p>{this.props.description}</p>
        </div>
        )
    }
}

export default ProjectCard;