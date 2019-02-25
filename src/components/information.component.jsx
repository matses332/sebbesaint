import React, { Component } from "react";
import {
  Row,
  Col,
  Container
} from "reactstrap";

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
            <Col>Made by Kristoffer Mattsson 2019</Col>
            </div>
          </Row>
        </Container>
        </div>
    );
  }
}
