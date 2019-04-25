import React from 'react';
import Helmet from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import * as Constants from 'Constants';

export default () => (
  <>
    <Helmet>
      <title>
        {Constants.LOADING_KO} | {Constants.SERVICE_NAME_KO}{' '}
      </title>
    </Helmet>
    <Container>
      <Row className="justify-content-center">
        <Col />
        <Col>
          <Spinner animation="grow" role="status" variant="success">
            <span className="sr-only">{Constants.LOADING_KO} ...</span>
          </Spinner>
        </Col>
        <Col />
      </Row>
    </Container>
  </>
);
