import React from 'react';
import TermsPresenter from './TermsPresenter';
import * as Constants from 'Constants';
// import constants from 'jest-haste-map/build/constants';

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

    return <TermsPresenter error={error} loading={loading} />;
  }
}
