import React from 'react';
import { STATE_READY } from '~contexts/PreloadingContext';
import PreLoader from '~components/PreLoader';
import usePreloading from '~hooks/usePreloading';

function AppContainer({ Component, ...pageProps }) {
  const { loadingState, setLoadingState } = usePreloading();

  return (
    <>
      <Component {...pageProps} />

      {loadingState !== STATE_READY && (
        <PreLoader setLoadingState={setLoadingState} />
      )}
    </>
  );
}

export default AppContainer;
