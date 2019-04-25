import React from "react";
import PropTypes from "prop-types";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Poster from "Components/Poster";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>Movies | 전자정부서비스</title>
      </Helmet>
      <Container>
        <Row>
          <Col>
            {nowPlaying && nowPlaying.length > 0 && (
              <Section title="Now Playing">
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
              <Section title="Upcoming Movies">
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
              <Section title="Popular Movies">
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
          <Col>{error && <Alert variant="danger" text={error} />}</Col>
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
