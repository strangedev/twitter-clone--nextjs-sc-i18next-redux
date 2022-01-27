import styled from 'styled-components';
import React, { FunctionComponent, ReactElement } from 'react';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Centering: FunctionComponent = function ({
  children
}): ReactElement {
  return (
    <Container>
      { children }
    </Container>
  );
};

export {
  Centering
};
