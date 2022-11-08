import { useState, useEffect, useCallback } from 'react';
import { withWindow } from '~utils/dom';

const getScreenWidth = () => {
  if (typeof window === 'undefined') {
    return 0;
  }

  return window.innerWidth;
};

const mediaQuerySizeRanges = {
  xs: { min: 0, max: 575 },
  sm: { min: 576, max: 767 },
  md: { min: 768, max: 991 },
  lg: { min: 992, max: 1199 },
  xl: { min: 1200, max: 1399 },
  xxl: { min: 1400, max: 6_000_000 },
};

const mediaQuerySizeKeys = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

const getCurrentMediaQuery = () => {
  const current = mediaQuerySizeKeys.find((key) => {
    const screenWidth = getScreenWidth();

    return (
      mediaQuerySizeRanges[key].min <= screenWidth &&
      mediaQuerySizeRanges[key].max >= screenWidth
    );
  });

  return current || 'xs';
};

export const isEqual = (size1, size2) => {
  return size1 === size2;
};

export const isLessThan = (size1, size2) => {
  const minOf1 = mediaQuerySizeRanges[size1].min;
  const maxOf2 = mediaQuerySizeRanges[size2].max;

  return minOf1 > maxOf2;
};

export const isGreaterThan = (size1, size2) => {
  const maxOf1 = mediaQuerySizeRanges[size1].max;
  const minOf2 = mediaQuerySizeRanges[size2].min;

  return maxOf1 < minOf2;
};

export const isLessOrEqual = (size1, size2) => {
  return isEqual(size1, size2) || isLessThan(size1, size2);
};

export const isGreaterOrEqual = (size1, size2) => {
  return isEqual(size1, size2) || isGreaterThan(size1, size2);
};

function useMediaQuery() {
  const [mediaQuerySize, setMediaQuerySize] = useState({
    size: getCurrentMediaQuery(),
    width: getScreenWidth(),
  });

  const onWindowResize = useCallback(() => {
    const currentQuery = getCurrentMediaQuery();
    setMediaQuerySize({
      size: currentQuery,
      width: getScreenWidth(),
    });
  }, [mediaQuerySize]);

  useEffect(() => {
    return withWindow((win) => {
      win.addEventListener('resize', onWindowResize);
      return () => {
        win.removeEventListener('resize', onWindowResize);
      };
    });
  }, []);

  return mediaQuerySize;
}

export { useMediaQuery };
