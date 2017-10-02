import React, { Component } from 'react';
import './header.css';

class JumbotronInsance extends Component {
  constructor() {
    super();
    this.state = {
      jumboImage: '',
    };
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      jumboImage: 'url(\'https://s3.amazonaws.com/dead-lift.com/jumbotron.jpg\'',
    });
  }

  render() {
    return (
      <header className="masthead" />
    );
  }
}

export default JumbotronInsance;
