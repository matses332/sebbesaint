import React, { Component } from "react";
import {
  Row,
  Col,
  Container
} from "reactstrap";
import { SocialIcon } from "react-social-icons";

export default class InformationComponent extends Component {
  render() {
    return (
        <div className="textdiv">
        <Container style={{ color: 'gray'}}>
          <Row>
              <br/>
              <br/>
              
            <Col></Col>
            
            <div className="textdiv2">
            <Col>© 2019 Sebastian Saint Web by Kristoffer Mattsson </Col>
            </div>
          </Row>
        </Container>
        </div>
    );
  }
}
