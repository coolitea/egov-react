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

let CONST_SERVICE_NAME = Constants.SERVICE_NAME_EN;
let CONST_TV = Constants.TV_EN;
let CONST_TOP_RATED_SHOWS = Constants.TOP_RATED_SHOWS_EN;
let CONST_POPULAR_SHOWS = Constants.POPULAR_SHOWS_EN;
let CONST_AIRING_TODAY = Constants.AIRING_TODAY_EN;

if (Constants.LANGUAGE === 'KO') {
  CONST_SERVICE_NAME = Constants.SERVICE_NAME_KO;
  CONST_TV = Constants.TV_KO;
  CONST_TOP_RATED_SHOWS = Constants.TOP_RATED_SHOWS_KO;
  CONST_POPULAR_SHOWS = Constants.POPULAR_SHOWS_KO;
  CONST_AIRING_TODAY = Constants.AIRING_TODAY_KO;
}

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>
          {CONST_TV} | {CONST_SERVICE_NAME}
        </title>
      </Helmet>
      <Container>
        <Row>
          <Col>
            {topRated && topRated.length > 0 && (
              <Section title={CONST_TOP_RATED_SHOWS}>
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
              <Section title={CONST_POPULAR_SHOWS}>
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
              <Section title={CONST_AIRING_TODAY}>
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
          <Col>{error && <Alert variant="danger" text={error} />}</Col>
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
