import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// import { SocialIcon } from 'react-social-icons';
import PropTypes from 'prop-types';

class SocialBar extends Component {
  constructor() {
    super();
    this.state = {
      socialIconLinks: '',
    };
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      socialIconLinks: [
        'http://www.facebook.com/pages/Dead-Lift/120128450045',
        'http://twitter.com/DeadLift518',
      ],
    });
  }

  socialItems() {
    const style = {
      paddingRight: '5em',
    };
    // return this.state.socialIconLinks.map(item => (
    //   <span style={style}>
    //     <SocialIcon url={item} color="black" />
    //   </span>
    // ));
    return this.props.socialLinks.map((item, idx) => (
      <NavItem key={item.id} eventKey={idx} href={item.url}>
        <img src={item.urlIco} alt="" />
      </NavItem>
    ));
  }

  render() {
    const style = {
      display: 'block',
      left: '40%',
      position: 'relative',
    };
    return (
      <div className="social-icons">
        <Navbar inverse>
          <Nav style={style}>{this.socialItems()}</Nav>
        </Navbar>
      </div>
    );
  }
}

SocialBar.defaultProps = {
  socialLinks: [
    {
      id: 1,
      urlIco: 'https://s3.amazonaws.com/dead-lift.com/facebook-gray.png',
      url: 'http://www.facebook.com/pages/Dead-Lift/120128450045',
    },
    {
      id: 2,
      urlIco: 'https://s3.amazonaws.com/dead-lift.com/twitter-gray.png',
      url: 'http://twitter.com/DeadLift518',
    },
  ],
};

SocialBar.propTypes = {
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    urlIco: PropTypes.string,
    url: PropTypes.string,
  })),
};

export default SocialBar;
