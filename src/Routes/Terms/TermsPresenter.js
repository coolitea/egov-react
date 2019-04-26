import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import * as Constants from "Constants";

let CONST_SERVICE_NAME = Constants.SERVICE_NAME_EN;
let CONST_TERMS = Constants.TERMS_EN;
let CONST_TERMS_DETAIL = Constants.TERMS_DETAIL_EN;

if (Constants.LANGUAGE === "KO") {
  CONST_SERVICE_NAME = Constants.SERVICE_NAME_KO;
  CONST_TERMS = Constants.TERMS_KO;
  CONST_TERMS_DETAIL = Constants.TERMS_DETAIL_KO;
}

const TermsPresenter = ({ loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>
          {CONST_TERMS} | {CONST_SERVICE_NAME}
        </title>
      </Helmet>
      <Container>
        <Row>
          <Col>
            <h1>{CONST_TERMS}</h1>
            <p>{CONST_TERMS_DETAIL}</p>
          </Col>
        </Row>
      </Container>

      {error && <Alert variant="danger">{error}</Alert>}
    </>
  );

TermsPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TermsPresenter;
