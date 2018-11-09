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
                <a target="_blank" href=  {this.props.gitHubURL}>GitHub</a>
                |
                <a target="_blank" href={this.props.exampleURL}>{this.props.exampleType}</a>
            </div>
            <p className="project-description-summary">{this.props.descriptionSummary}</p>
            {this.renderProjectBulletPoints()}
        </div>
        )
    }
}

export default ProjectCard;