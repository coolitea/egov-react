import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Loader from '../../Components/Loader';
import * as Constants from '../../Constants';
import { useT } from '../../Components/context';

const GridPresenter = ({ loading, error }) => {
  const t = useT();

  return loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>
          {Constants.GRID}| {Constants.SERVICE_NAME}
        </title>
      </Helmet>
      <Container>
        {/* <Row>
          <Col>
            <Nav
              justify
              variant="tabs"
              // onSelect={selectedKey => alert(`${selectedKey} 준비중입니다...`)}
            >
              <Nav.Item>
                <Nav.Link eventKey="agGrid">ag-Grid</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sbGrid">SBGrid</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="igniteUI">Ignite UI for React</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <Alert variant="info">{t(Constants.NOT_READY)}</Alert>
          </Col>
        </Row>
      </Container>

      {error && <Alert variant="danger">{error}</Alert>}
    </>
  );
};

GridPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

GridPresenter.defaultProps = {
  error: '',
};

export default GridPresenter;
