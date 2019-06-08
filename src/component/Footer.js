import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import styled from 'styled-components';
export default class Footer extends Component {
  render() {
    return (
      <FootWrapper className="navbar navbar-expand-sm
      bg-primary navbar-dark px-sm-5 mb-2">
      <div className="container " >
      <div className="row">
         <div className="footer-copyright col-10 mx-auto text-center py-2">
        © 2019 Copyright: Ochulaobari Emmanuel
         
         </div>
         </div>
         </div>
         {
           /*
         
           <Link to="/">
          <img  alt="store" className="navbar-brand"/>
          </Link>
         
          <Link to="/cart" className="ml-auto">
    
         </Link>*/}
          </FootWrapper>
         
      )
    }
}
const FootWrapper=styled.nav`
background: var(--mainDark)!important;
  color:var(--mainWhite)!important;
  font-size:0.8rem;
  // y we use rem- because pix are absolute n rem target the reoot element
  //so even if the user changes the value our site is responsive instead of forcing
  //our value's on the user
  text-transform:capitalize;
 
  

`;
