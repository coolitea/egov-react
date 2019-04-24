import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  color: white;
  position: fixed;
  bottom: 0;
  left: 10px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

export default () => (
  <Footer>
    © 2019 coolitea
  </Footer>
);
 