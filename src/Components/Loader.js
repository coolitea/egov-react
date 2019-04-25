import React from "react";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

export default () => (
  <>
    <Helmet>
      <title>Loading | 전자정부서비스</title>
    </Helmet>
    <Container>
      <Row className="justify-content-center">
        <Col />
        <Col>
          <Spinner animation="grow" role="status" variant="success">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Col>
        <Col />
      </Row>
    </Container>
  </>
);
