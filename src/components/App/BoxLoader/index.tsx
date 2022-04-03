import React from 'react';
import { BoxLoaderWrapper, BoxWrap, Box, BoxLoaderBackground } from './styles';

function BoxLoader(): JSX.Element {
  return (
    <BoxLoaderBackground>
      <BoxLoaderWrapper className="wrapper">
        <BoxWrap>
          <Box className="one" />
          <Box className="two" />
          <Box className="three" />
          <Box className="four" />
          <Box className="five" />
          <Box className="six" />
        </BoxWrap>
      </BoxLoaderWrapper>
    </BoxLoaderBackground>
  );
}

export default BoxLoader;
