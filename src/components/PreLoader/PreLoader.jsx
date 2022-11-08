import styles from './PreLoader.module.scss';
import React, { useCallback, useEffect } from 'react';
import {
  STATE_LOADED,
  STATE_LOADING,
  STATE_READY,
} from '~contexts/PreloadingContext';
import usePreloading from '~hooks/usePreloading';
import useServerSide from '~hooks/useServerSide';

function PreLoader({ setLoadingState }) {
  const { isServerSide } = useServerSide();
  const { loadingState } = usePreloading();

  const triggerFinish = useCallback(() => {
    setTimeout(() => {
      setLoadingState(STATE_LOADED);

      setTimeout(() => {
        setLoadingState(STATE_READY);
      }, 200);
    }, 500);
  }, []);

  useEffect(() => {
    if (isServerSide) {
      return;
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', triggerFinish);
    } else {
      triggerFinish();
    }
  }, []);

  const isLoading = loadingState === STATE_LOADING;

  return (
    <div
      className={styles['pre-loader']}
      style={{
        opacity: isLoading ? 1 : 0,
      }}
    >
      <div className={styles['cube-container']}>
        <div className={[styles['cube'], styles['cube-1']].join(' ')} />
        <div className={[styles['cube'], styles['cube-2']].join(' ')} />
        <div className={[styles['cube'], styles['cube-3']].join(' ')} />
        <div className={[styles['cube'], styles['cube-4']].join(' ')} />
      </div>
    </div>
  );
}

export default PreLoader;
