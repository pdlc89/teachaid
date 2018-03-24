import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";

class Splash extends Component {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Splash Page</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Splash;
