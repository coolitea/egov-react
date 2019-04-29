import React from 'react';
import PropTypes from 'prop-types';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Poster from 'Components/Poster';
import Helmet from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import * as Constants from 'Constants';

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>
          {Constants.TV}| {Constants.SERVICE_NAME}
        </title>
      </Helmet>
      <Container>
        <Row>
          <Col>
            {topRated && topRated.length > 0 && (
              <Section title={Constants.TOP_RATED_SHOWS}>
                {topRated.map(show => (
                  <Poster
                    key={show.id}
                    id={show.id}
                    imageUrl={show.poster_path}
                    title={show.original_name}
                    rating={show.vote_average}
                    year={show.first_air_date.substring(0, 4)}
                  />
                ))}
              </Section>
            )}
            {popular && popular.length > 0 && (
              <Section title={Constants.POPULAR_SHOWS}>
                {popular.map(show => (
                  <Poster
                    key={show.id}
                    id={show.id}
                    imageUrl={show.poster_path}
                    title={show.original_name}
                    rating={show.vote_average}
                    year={show.first_air_date.substring(0, 4)}
                  />
                ))}
              </Section>
            )}
            {airingToday && airingToday.length > 0 && (
              <Section title={Constants.AIRING_TODAY}>
                {airingToday.map(show => (
                  <Poster
                    key={show.id}
                    id={show.id}
                    imageUrl={show.poster_path}
                    title={show.original_name}
                    rating={show.vote_average}
                    year={show.first_air_date.substring(0, 4)}
                  />
                ))}
              </Section>
            )}
          </Col>
        </Row>
        <Row>
          <Col>{error && <Alert variant="danger">{error}</Alert>}</Col>
        </Row>
      </Container>
    </>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
