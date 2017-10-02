import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
  constructor() {
    super();
    this.deleteProject = this.deleteProject.bind(this);
  }
  deleteProject() {
    this.props.onDelete(this.props.project.id);
  }

  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
        <button type="button" onClick={this.deleteProject}>Delete</button>
      </li>
    );
  }
}

ProjectItem.defaultProps = {
  project: {},
  onDelete() {},
};

ProjectItem.propTypes = {
  onDelete: PropTypes.func,
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

export default ProjectItem;
