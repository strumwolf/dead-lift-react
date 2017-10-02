import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './project-item';

class Projects extends Component {
  constructor() {
    super();
    this.handleProjects = this.handleProjects.bind(this);
  }

  handleProjects() {
    return this.props.projects.map(project =>
      <ProjectItem key={project.id} project={project} onDelete={this.props.onDelete} />);
  }

  render() {
    if (!this.props.projects.length) return [];
    const projectItems = this.handleProjects(this.props.projects);
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

Projects.defaultProps = {
  projects: [],
  onDelete() {},
};

Projects.propTypes = {
  onDelete: PropTypes.func,
  projects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
  })),
};

export default Projects;
