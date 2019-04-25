import React, { Component } from 'react';
import * as Constants from 'Constants';
import Alert from 'react-bootstrap/Alert';

let CONST_WELCOME = Constants.WELCOME_EN;
let CONST_LOREM_IPSUM = Constants.LOREM_IPSUM_EN;

if (Constants.LANGUAGE === 'KO') {
  CONST_WELCOME = Constants.WELCOME_KO;
  CONST_LOREM_IPSUM = Constants.LOREM_IPSUM_KO;
}

export default class Welcome extends Component {
  render() {
    return (
      <Alert variant="success">
        <Alert.Heading>{CONST_WELCOME}</Alert.Heading>
        <p>{CONST_LOREM_IPSUM}</p>
      </Alert>
    );
  }
}
