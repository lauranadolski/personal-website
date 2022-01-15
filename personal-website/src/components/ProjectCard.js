import React from 'react';

class ProjectCard extends React.Component {

    renderProjectBulletPoints = () => {
        return this.props.descriptionBulletPoints.map((bulletPoint) => {
            return (
                <li>{bulletPoint}</li>
            )
        })
    }

    render() {
        return (
        <div className="project-card">
            <h1 className="project-title">{this.props.name}</h1>
            <div className="project-links">
                <a href={this.props.gitHubURL} target="_blank" rel="noopener noreferrer">GitHub</a>
                |
                <a href={this.props.exampleURL} target="_blank" rel="noopener noreferrer">{this.props.exampleType}</a>
            </div>
            <div className="project-info">
                <p className="project-description-summary">{this.props.descriptionSummary}</p>
                <ul>
                    {this.renderProjectBulletPoints()}
                </ul>
            </div>
        </div>
        )
    }
}

export default ProjectCard;