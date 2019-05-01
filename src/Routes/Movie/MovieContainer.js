import React from 'react';
import MoviePresenter from './MoviePresenter';
import { moviesApi } from 'api';
import * as Constants from 'Constants';

export default class extends React.Component {
  state = {
    nowPlaying: null,
    popular: null,
    upcoming: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming }
      } = await moviesApi.upcoming();
      const {
        data: { results: popular }
      } = await moviesApi.popular();

      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
    } catch {
      this.setState({
        error: Constants.NOTHING_FOUND
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;

    return (
      <MoviePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
