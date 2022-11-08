import React, { useState } from 'react';
import { PreloadingContext, STATE_LOADING } from '~contexts/PreloadingContext';

function PreloadingProvider({ children }) {
  const [loadingState, setLoadingState] = useState(STATE_LOADING);

  return (
    <PreloadingContext.Provider
      value={{
        loadingState,
        setLoadingState,
      }}
    >
      {children}
    </PreloadingContext.Provider>
  );
}

export default PreloadingProvider;
