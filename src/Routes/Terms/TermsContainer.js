import React from "react";
import TermsPresenter from "./TermsPresenter";

export default class extends React.Component {
  state = {
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
    } catch {
      this.setState({
        error: "Can't find TV information."
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
