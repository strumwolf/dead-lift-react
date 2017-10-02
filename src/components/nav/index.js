import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './nav.css';

class NavHeader extends Component {
  constructor() {
    super();
    this.state = {
      brand: '',
    };
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      brand: 'Dead-Lift',
    });
  }

  menuItems() {
    return this.props.menuItems.map((item, idx) => (
      <NavItem key={item.id} eventKey={idx} href="/">
        {item.name}
      </NavItem>
    ));
  }

  render() {
    return (
      <Navbar className="navbar-light" fixedTop collapseOnSelect id="mainNav">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#pageTop">{this.state.brand}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>{this.menuItems()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavHeader.defaultProps = {
  menuItems: [
    { id: 1, name: 'The Band' },
    { id: 2, name: 'Shows' },
    { id: 3, name: 'Media' },
    { id: 4, name: 'Releases' },
    { id: 5, name: 'Links' },
    { id: 6, name: 'Contact Us' },
  ],
};

NavHeader.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
};

export default NavHeader;
