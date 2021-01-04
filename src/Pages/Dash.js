import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Temperatura from "../Components/temperatura";

export default class Dash extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col xs={12} md={8}>
              <Temperatura />
            </Col>
            <Col>1 of 1</Col>
            <Col>1 of 1</Col>
            <Col>1 of 1</Col>
          </Row>
        </Container>
      </>
    );
  }
}
