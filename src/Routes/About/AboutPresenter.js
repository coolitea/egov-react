import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import ServiceImage from "assets/images/about-service_320.jpg";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import * as Constants from "Constants";
// import * as ABOUT from "Routes/ABOUT";
import bizMagager from "assets/images/team/biz-manager_320.jpg";
import itMagager from "assets/images/team/it-manager_320.jpg";
import bizStaff from "assets/images/team/biz-staff_320.jpg";
import itStaff from "assets/images/team/it-staff_320.jpg";
import { useT } from "../../Components/context";

const AboutPresenter = ({ loading, error }) => {
  const t = useT();

  return loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>
          {t(Constants.ABOUT)} | {t(Constants.SERVICE_NAME)}
        </title>
      </Helmet>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img src={ServiceImage} alt="Card image" width="50%" />
              <Card.ImgOverlay>
                <Card.Title>{t(Constants.ABOUT_SERVICE)}</Card.Title>
                <Card.Text>{t(Constants.WHAT_WE_DO)}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <h1>팀 소개 </h1>
            <p>세계 일류 종합증권서비스를 제공하는 전문가 그룹을 소개합니다.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <Image src={bizMagager} roundedCircle fluid />
            <h2>김신뢰</h2>
            <h4 className="text-secondary">비즈니스 팀장</h4>
          </Col>
          <Col xs={6} md={3}>
            <Image src={itMagager} roundedCircle fluid />
            <h2>이따뜻</h2>
            <h4 className="text-secondary">IT 팀장</h4>
          </Col>
          <Col xs={6} md={3}>
            <Image src={bizStaff} roundedCircle fluid />
            <h2>최책임</h2>
            <h4 className="text-secondary">비즈니스 팀원</h4>
          </Col>
          <Col xs={6} md={3}>
            <Image src={itStaff} roundedCircle fluid />
            <h3>박전문</h3>
            <h4 className="text-secondary">IT 팀원</h4>
          </Col>
        </Row>
      </Container>

      {error && <Alert variant="danger">{error}</Alert>}
    </>
  );
};

AboutPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default AboutPresenter;
