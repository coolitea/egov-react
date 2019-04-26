import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";

import * as Constants from "Constants";

let CONST_SUPPORT = Constants.SUPPORT_EN;
let CONST_SERVICE_NAME = Constants.SERVICE_NAME_EN;

if (Constants.LANGUAGE === "KO") {
  CONST_SERVICE_NAME = Constants.SERVICE_NAME_KO;
  CONST_SUPPORT = Constants.SUPPORT_KO;
}

const SupportPresenter = ({ loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>
          {CONST_SUPPORT} | {CONST_SERVICE_NAME}
        </title>
      </Helmet>
      <Container>
        <Row>
          <Col>
            <h1>자주 묻는 질문</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    [질문 1] 회원 가입은 어떻게 하나요?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    [답변 1] 회원 가입은... 하시면 가능합니다.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    [질문 2] 비밀번호 찾기는 어떻게 하나요?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    [답변 2] 비밀번호 찾기는... 하시면 가능합니다.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    [질문 3] ㅇㅇㅇ이 궁금합니다.
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>[답변 3] ㅇㅇㅇ는 이렇게 하시면 됩니다.</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    [질문 4] ㅇㅇㅇ이 궁금합니다.
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>[답변 4] ㅇㅇㅇ는 이렇게 하시면 됩니다.</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
      {/* <Container>
        <Row>
          <Col>
            <h1>직원 검색</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h1>오시는 길</h1>
          </Col>
        </Row>
      </Container> */}

      {error && <Alert variant="danger">{error}</Alert>}
    </>
  );

SupportPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default SupportPresenter;
