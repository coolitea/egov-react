import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 30px;
`;

export default () => (
  <Container>
    <Helmet>
      <title>Loading | 전자정부서비스</title>
    </Helmet>
    <span role="img" aria-label="Loading">
      Loading... ⏰
    </span>
  </Container>
);
