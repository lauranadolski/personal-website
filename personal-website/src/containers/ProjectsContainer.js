import React from 'react';
import ProjectCard from '../components/ProjectCard';

class ProjectsContainer extends React.Component {

    renderProjects = () => {
        return this.props.projects.map((project) => {
            return (
                <ProjectCard
                    name={project.name}
                    exampleType={project.exampleType}
                    exampleURL={project.exampleURL}
                    gitHubURL={project.gitHubURL}
                    description={project.description}
                />
            )
        })
    }

    render() {
        return (
            <div>
                <div id="projects-container">
                {this.renderProjects()}
                </div>
            </div>
        )
    }
}

export default ProjectsContainer;