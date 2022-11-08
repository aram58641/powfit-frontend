const withStorage = (callback) => {
  if (typeof window !== 'undefined') {
    return callback(window.localStorage);
  }

  return null;
};

export const setStorage = (key, value) => {
  return withStorage((storage) => {
    return storage.setItem(key, value);
  });
};

export const getStorage = (key) => {
  return withStorage((storage) => {
    return storage.getItem(key);
  });
};

export const removeStorage = (key) => {
  return withStorage((storage) => {
    return storage.removeItem(key);
  });
};
