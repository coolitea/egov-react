import React from 'react';
import Alert from 'react-bootstrap/Alert';
import * as Constants from '../Constants';
import { useT } from './context';

export default () => {
  const t = useT();
  return (
    <Alert variant="success">
      <Alert.Heading>{t(Constants.WELCOME)}</Alert.Heading>
    </Alert>
  );
};
