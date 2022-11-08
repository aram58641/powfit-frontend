import '~assets/styles/global.scss';
// @OTODO: import global styles

import React from 'react';
import ProviderWrapper from '~bootstrap/ProviderWrapper';
import AppContainer from '~bootstrap/AppContainer';

function App({ Component, pageProps }) {
  return (
    <ProviderWrapper pageProps={pageProps}>
      <AppContainer Component={Component} {...pageProps} />
    </ProviderWrapper>
  );
}

export default App;
