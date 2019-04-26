import React from "react";
import PropTypes from "prop-types";
import Welcome from "Components/Welcome";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Poster from "Components/Poster";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import * as Constants from "Constants";

let CONST_SERVICE_NAME = Constants.SERVICE_NAME_EN;
let CONST_NOW_PLAYING = Constants.NOW_PLAYING_EN;
let CONST_UPCOMING_MOVIE = Constants.UPCOMING_MOVIE_EN;
let CONST_POPULAR_MOVIES = Constants.POPULAR_MOVIES_EN;

if (Constants.LANGUAGE === "KO") {
  CONST_SERVICE_NAME = Constants.SERVICE_NAME_KO;
  CONST_NOW_PLAYING = Constants.NOW_PLAYING_KO;
  CONST_UPCOMING_MOVIE = Constants.UPCOMING_MOVIE_KO;
  CONST_POPULAR_MOVIES = Constants.POPULAR_MOVIES_KO;
}

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>{CONST_SERVICE_NAME}</title>
      </Helmet>
      <Container>
        <Row>
          <Col>
            <Welcome />
          </Col>
        </Row>
        <Row>
          <Col>
            {nowPlaying && nowPlaying.length > 0 && (
              <Section title={CONST_NOW_PLAYING}>
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
              <Section title={CONST_UPCOMING_MOVIE}>
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
              <Section title={CONST_POPULAR_MOVIES}>
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

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
