import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Loader from '../../Components/Loader';
import * as Constants from '../../Constants';

const TermsPresenter = ({ loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>
          {Constants.TERMS}| {Constants.SERVICE_NAME}
        </title>
      </Helmet>
      <Container>
        <Row>
          <Col>
            <h1>{Constants.TERMS}</h1>
            <p> {Constants.TERMS_DETAIL}</p>
          </Col>
        </Row>
      </Container>

      {error && <Alert variant="danger">{error}</Alert>}
    </>
  );

TermsPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TermsPresenter;
