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

const MoviePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>
          {Constants.MOVIE} | {Constants.SERVICE_NAME}
        </title>
      </Helmet>
      <Container>
        <Row>
          <Col>
            {nowPlaying && nowPlaying.length > 0 && (
              <Section title={Constants.NOW_PLAYING}>
                {nowPlaying.map(movie => (
                  <Poster
                    key={movie.id}
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.original_title}
                    rating={movie.vote_average}
                    year={movie.release_date.substring(0, 4)}
                    isMovie={true}
                  />
                ))}
              </Section>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            {upcoming && upcoming.length > 0 && (
              <Section title={Constants.UPCOMING_MOVIE}>
                {upcoming.map(movie => (
                  <Poster
                    key={movie.id}
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.original_title}
                    rating={movie.vote_average}
                    year={movie.release_date.substring(0, 4)}
                    isMovie={true}
                  />
                ))}
              </Section>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            {popular && popular.length > 0 && (
              <Section title={Constants.POPULAR_MOVIES}>
                {popular.map(movie => (
                  <Poster
                    key={movie.id}
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.original_title}
                    rating={movie.vote_average}
                    year={movie.release_date.substring(0, 4)}
                    isMovie={true}
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

MoviePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default MoviePresenter;
