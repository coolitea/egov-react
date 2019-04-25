import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

const TermsPresenter = ({ loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>Terms | 전자정부서비스</title>
      </Helmet>
      <Container>
        <Row>
          <Col>
            <h1>약관</h1>
          </Col>
        </Row>
      </Container>

      {error && <Alert variant="danger" text={error} />}
    </>
  );

TermsPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TermsPresenter;
