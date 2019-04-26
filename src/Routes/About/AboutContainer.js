import React from "react";
import AboutPresenter from "./AboutPresenter";
import * as Constants from "Constants";

let CONST_NOTHING_FOUND = Constants.NOTHING_FOUND_EN;

if (Constants.LANGUAGE === "KO") {
  CONST_NOTHING_FOUND = Constants.NOTHING_FOUND_KO;
}

export default class extends React.Component {
  state = {
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
    } catch {
      this.setState({
        error: CONST_NOTHING_FOUND
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
