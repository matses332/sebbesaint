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
import informationComponent from './information.component';

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
        <br></br>
        <Row><img src='../assets/sebbesaintblack.jpg' width= "350em" height= "150em" /><br></br></Row>
        
                <Navbar dark expand='md'>
          <NavbarBrand href='/'> <br></br> <SocialIcon url="https://www.instagram.com/sebastiansaint/" /> <SocialIcon url="https://www.facebook.com/sebastian.mattsson" /> <SocialIcon url="https://soundcloud.com/sebastiansaint" /> </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse  navbar>
            <Nav className='ml-auto' navbar>
            <NavItem>
                <NavLink href='/'>Frontpage </NavLink>
              </NavItem>
            <NavItem>
                <NavLink href='/Gallery/'>Gallery </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/About/'>About Me </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/Contact/'>Contact Me </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/Mixes/'>Mixes </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <br></br>
        <br></br>
            </div>
            
            
            <div style={{ background:"#000000", width: "100%", minHeight: "50%"}}>
            <AppRouter/>
            </div>
            <div>
            <informationComponent/>
            </div>
            </div>
           
        )
    }
}