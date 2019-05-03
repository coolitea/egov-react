import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useT } from '../../Components/context';
import cio from '../../assets/images/team/cio_320.jpg';
import coo from '../../assets/images/team/coo_320.jpg';
import cso from '../../assets/images/team/cso_320.jpg';
import cto from '../../assets/images/team/cto_320.jpg';
import cfo from '../../assets/images/team/cfo_320.jpg';
import ceo from '../../assets/images/team/ceo_320.jpg';
import * as Constants from '../../Constants';
import Loader from '../../Components/Loader';

const fontAwesomeStyle = {
  stroke: 'darkGray',
  strokeWidth: '20',
  marginLeft: '20px',
};

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
            <div className="h1">{t(Constants.ABOUT_US)}</div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <Image src={ceo} roundedCircle fluid />
            <h2>{t(Constants.CEO_NAME)}</h2>
            <h4 className="text-secondary">{t(Constants.CEO)}</h4>
          </Col>
          <Col xs={6} md={3}>
            <Image src={cfo} roundedCircle fluid />
            <h2>{t(Constants.COO_NAME)}</h2>
            <h4 className="text-secondary">{t(Constants.COO)}</h4>
          </Col>
          <Col xs={6} md={3}>
            <Image src={cio} roundedCircle fluid />
            <h2>{t(Constants.CFO_NAME)}</h2>
            <h4 className="text-secondary">{t(Constants.CFO)}</h4>
          </Col>
          <Col xs={6} md={3}>
            <Image src={coo} roundedCircle fluid />
            <h3>{t(Constants.CSO_NAME)}</h3>
            <h4 className="text-secondary">{t(Constants.CSO)}</h4>
          </Col>
          <Col xs={6} md={3}>
            <Image src={cso} roundedCircle fluid />
            <h2>{t(Constants.CIO_NAME)}</h2>
            <h4 className="text-secondary">{t(Constants.CIO)}</h4>
          </Col>
          <Col xs={6} md={3}>
            <Image src={cto} roundedCircle fluid />
            <h3>{t(Constants.CTO_NAME)}</h3>
            <h4 className="text-secondary">{t(Constants.CTO)}</h4>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col>
            <div className="h1">{t(Constants.OUR_NUMBERS)}</div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <FontAwesomeIcon
              icon="user-friends"
              size="3x"
              color="#0984e3"
              style={fontAwesomeStyle}
            />
            <Card>
              <Card.Body>
                <Card.Title>{t(Constants.NUMBER_OF_PARTICIPANTS)}</Card.Title>
                <Card.Text>
                  {t(Constants.NUMBER_OF_PARTICIPANTS_DETAIL)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <FontAwesomeIcon
              icon="piggy-bank"
              size="3x"
              color="#fd79a8"
              style={fontAwesomeStyle}
            />
            <Card>
              <Card.Body>
                <Card.Title>{t(Constants.AMOUNT_OF_SECURITIES)}</Card.Title>
                <Card.Text>
                  {t(Constants.AMOUNT_OF_SECURITIES_DETAIL)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <FontAwesomeIcon
              icon="comment-dollar"
              size="3x"
              color="#fdcb6e"
              style={fontAwesomeStyle}
            />
            <Card>
              <Card.Body>
                <Card.Title>{t(Constants.AMOUNT_OF_SAVING)}</Card.Title>
                <Card.Text>{t(Constants.AMOUNT_OF_SAVING_DETAIL)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col>
            <div className="h1">{t(Constants.WHAT_GUIDES_US)}</div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Card className="text-center ">
              <Card.Body>
                <Card.Title>{t(Constants.OUR_MISSION)}</Card.Title>
                <Card.Text>{t(Constants.OUR_MISSION_DETAIL)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>{t(Constants.OUR_VISION)}</Card.Title>
                <Card.Text>{t(Constants.OUR_VISION_DETAIL)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {error && <Alert variant="danger">{error}</Alert>}
    </>
  );
};

AboutPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default AboutPresenter;
