/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react'
//import {Link} from "react-router-dom";
import logo from "../logo.svg"
import {ButtonContainer} from './Button';
// import styled from 'styled-components';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  //UncontrolledDropdown,
  //DropdownToggle,
  //DropdownMenu,
  //DropdownItem 
} from 'reactstrap';

//import FontAwesome from '@fontawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';


export default class  extends Component {
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
<div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
           {
              <img src={logo}  alt='logo'/>
           }
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/product/">Products</NavLink>
              </NavItem>
            <NavItem>
              <ButtonContainer></ButtonContainer>
            </NavItem>
            
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      );
  }
}
/* const NavWrapper=styled.nav`
background: var(--mainBlue)!important;
.nav-link{
  color:var(--mainWhite)!important;
  font-size:1.3rem;
  // y we use rem- because pix are absolute n rem target the reoot element
  //so even if the user changes the value our site is responsive instead of forcing
  //our value's on the user
  text-transform:capitalize;
  
}
`;*/