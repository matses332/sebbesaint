import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem ,
Row,Col} from 'reactstrap';
import { SocialIcon } from 'react-social-icons';
import AppRouter from './app.router';
import App from '../App';

export default class Start extends Component {

    render(){
        return(
            <div style={{ backgroundColor: "#000000", width: "100%", minHeight: "200px"}}>>
                <div>

          <Row>
          
        </Row>
        <Row>
            <br></br>
        </Row>
        <Row><img src='../assets/sebastiansaint.jpg' width= "15%" height="15%"/><br></br></Row>
        
                <Navbar dark expand='md'>
          <NavbarBrand href='/'> <br></br> <SocialIcon url="https://www.instagram.com/sebastiansaint/" /> <SocialIcon url="https://www.facebook.com/sebastian.mattsson" /> <SocialIcon url="https://soundcloud.com/sebastiansaint" /> </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse  navbar>
            <Nav className='ml-auto' navbar>
            <NavItem>
                <NavLink href='/'>Startsida </NavLink>
              </NavItem>
            <NavItem>
                <NavLink href='/Galleri/'>Galleri </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/Featured/'>Om Mig </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/KontaktaMig/'>Kontakta Mig </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/Mixar/'>Mixar </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <br></br>
        <br></br>
            </div>
            
            <div style={{ background:"black", width: "100%", minHeight: "50%"}}>
            <AppRouter/>
            </div>
            </div>
           
        )
    }
}