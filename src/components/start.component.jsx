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

export default class Start extends Component {

    render(){
        return(
            <div>

          <Row>
          
        </Row>
        <Row>
            <br></br>
        </Row>
        <Row><br></br></Row>
                <Navbar dark expand='md'>
          <NavbarBrand href='/'>React Test App</NavbarBrand>
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
            </Nav>
          </Collapse>
        </Navbar>
            </div>
        )
    }
}