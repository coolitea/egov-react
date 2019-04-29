import React from 'react';
import Helmet from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import * as Constants from 'Constants';
import { useT } from './context';

export default () => {
  const t = useT();

  return (
    <>
      <Helmet>
        <title>
          {t(Constants.LOADING)} |{t(Constants.SERVICE_NAME)}
        </title>
      </Helmet>
      <Container>
        <Row className="justify-content-center">
          <Col />
          <Col>
            <Spinner animation="grow" role="status" variant="success">
              <span className="sr-only">{t(Constants.LOADING)} ...</span>
            </Spinner>
          </Col>
          <Col />
        </Row>
      </Container>
    </>
  );
};
