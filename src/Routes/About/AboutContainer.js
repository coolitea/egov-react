import React from 'react';
import AboutPresenter from './AboutPresenter';
import * as Constants from 'Constants';

export default class extends React.Component {
  state = {
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
    } catch {
      this.setState({
        error: Constants.NOTHING_FOUND
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { error, loading } = this.state;

    return <AboutPresenter error={error} loading={loading} />;
  }
}
