import React, { Component } from "react";
import {
  Row,
  Col,
  Container
} from "reactstrap";

export default class InformationComponent extends Component {
  render() {
    return (
        <Container style={{ color: 'white'}}>
          <Row>
            <Col>Col 1</Col>
            <Col>Col 2</Col>
          </Row>
        </Container>
    );
  }
}
