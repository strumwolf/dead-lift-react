import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddProjects extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {},
      title: '',
      category: AddProjects.defaultProps.categories[0],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.catChange = this.catChange.bind(this);
  }

  catChange(event) {
    this.setState({
      ...this.state,
      category: event.target.value,
    });
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      title: event.target.value,
    });
  }

  handleSubmit(e) {
    if (!this.state.title) {
      /* eslint no-undef: off */
      /* eslint no-alert: off */
      alert('Title is required');
    } else {
      this.setState({
        ...this.setState,
        newProject: {
          id: uuid.v4(),
          title: this.state.title,
          category: this.state.category,
        },
      }, () => {
        this.props.addProjects(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    const categoryOptions = this.props.categories.map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ));
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="Category">Category</label>
            <select value={this.state.category} onChange={this.catChange}>
              {categoryOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

AddProjects.defaultProps = {
  categories: ['Web Design', 'Mobile Developement', 'Web Development'],
  addProjects() {},
};

AddProjects.propTypes = {
  addProjects: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default AddProjects;
