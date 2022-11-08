import React from 'react';
import TranslationProvider from '~providers/TranslationProvider';
import PreloadingProvider from '~providers/PreloadingProvider';

function ProviderWrapper({ pageProps, children }) {
  return (
    <PreloadingProvider>
      <TranslationProvider>
        <>{children}</>
      </TranslationProvider>
    </PreloadingProvider>
  );
}

export default ProviderWrapper;
