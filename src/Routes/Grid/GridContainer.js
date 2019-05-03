import React from 'react';
import GridPresenter from './GridPresenter';
import * as Constants from '../../Constants';

export default class extends React.Component {
  state = {
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
    } catch {
      this.setState({
        error: Constants.NOTHING_FOUND,
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { error, loading } = this.state;

    return <GridPresenter error={error} loading={loading} />;
  }
}
