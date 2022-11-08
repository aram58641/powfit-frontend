/* eslint-disable no-unused-vars */

import { createContext } from 'react';

export const STATE_LOADING = 'loading';
export const STATE_LOADED = 'loaded';
export const STATE_READY = 'ready';

export const PreloadingContext = createContext({
  loadingState: STATE_LOADING,
  setLoadingState: (state) => {},
});
