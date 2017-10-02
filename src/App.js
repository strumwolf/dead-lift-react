import React, { Component } from 'react';
import uuid from 'uuid';
import Nav from './components/nav';
import Jumbotron from './components/jumbotron/';
import Projects from './components/projects';
import AddProjects from './components/add-project';
import SocialBar from './components/social-bar/';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      addProjects: {
        titleRef: null,
        categoryRef: null,
      },
    };
    this.handleAddProject = this.handleAddProject.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design',
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Developement',
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Design',
        },
      ],
      addProjects: {
        titleRef: 'title',
        categoryRef: 'category',
      },
    });
  }

  handleAddProject(newProject) {
    this.setState({
      ...this.state,
      projects: [
        ...this.state.projects,
        newProject,
      ],
    });
  }

  handleDelete(projectId) {
    const index = this.state.projects.findIndex(project => project.id === projectId);
    const currentProjects = this.state.projects;
    currentProjects.splice(index, 1);
    this.setState({
      ...this.state,
      projects: currentProjects,
    });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Jumbotron />
        {/* <SocialBar /> */}
        {/* <AddProjects addProjects={this.handleAddProject} />
        <Projects projects={this.state.projects} onDelete={this.handleDelete} /> */}
      </div>
    );
  }
}

export default App;
