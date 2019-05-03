import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Poster from '../../Components/Poster';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import * as Constants from '../../Constants';
import { useT } from '../../Components/context';

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  handleSubmit,
  error,
  updateTerm,
}) => {
  const t = useT();
  return (
    <>
      <Helmet>
        <title>
          {t(Constants.SEARCH)} | {t(Constants.SERVICE_NAME)}
        </title>
      </Helmet>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Input
                placeholder={t(Constants.SEARCH_MOVIES_OR_TV_SHOWS)}
                value={searchTerm}
                onChange={updateTerm}
              />
            </Form>
            {loading ? (
              <Loader />
            ) : (
              <>
                {movieResults && movieResults.length > 0 && (
                  <Section title={t(Constants.MOVIE_RESULT)}>
                    {movieResults.map(movie => (
                      <Poster
                        key={movie.id}
                        id={movie.id}
                        imageUrl={movie.poster_path}
                        title={movie.original_title}
                        rating={movie.vote_average}
                        year={movie.release_date.substring(0, 4)}
                        isMovie
                      />
                    ))}
                  </Section>
                )}
                {tvResults && tvResults.length > 0 && (
                  <Section title={t(Constants.TV_RESULT)}>
                    {tvResults.map(show => (
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
                {error && <Alert variant="danger">{error}</Alert>}
                {tvResults &&
                  movieResults &&
                  tvResults.length === 0 &&
                  movieResults.length === 0 && (
                    <Alert variant="danger">{t(Constants.NOTHING_FOUND)}</Alert>
                  )}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
