import React from 'react';
import * as Constants from 'Constants';
import Alert from 'react-bootstrap/Alert';
import { useT } from './context';

export default () => {
  const t = useT();
  return (
    <Alert variant="success">
      <Alert.Heading>{t(Constants.WELCOME)}</Alert.Heading>
    </Alert>
  );
};
