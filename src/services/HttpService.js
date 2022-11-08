import UrlService from './UrlService';

const DEFAULT_RETRY_ATTEMPTS = 0; //3;

class HttpService {
  defaultHeaders = {};

  setLocale(locale) {
    return this.setDefaultHeader('X-App-Language', locale);
  }

  setDefaultHeader(name, value) {
    this.defaultHeaders[name] = value;
    return this;
  }

  removeDefaultHeader(name) {
    delete this.defaultHeaders[name];
  }

  get(
    url,
    /*data: any = {}, */ headers = {},
    requestRetryAttemptsCount = DEFAULT_RETRY_ATTEMPTS
  ) {
    // console.log(">>>> url", url);
    return this.send(
      {
        method: 'GET',
        url,
        headers,
        // body: JSON.stringify(data),
      },
      requestRetryAttemptsCount
    );
  }

  post(
    url,
    data = {},
    headers = {},
    requestRetryAttemptsCount = DEFAULT_RETRY_ATTEMPTS
  ) {
    return this.send(
      {
        method: 'POST',
        url,
        headers,
        body: JSON.stringify(data),
      },
      requestRetryAttemptsCount
    );
  }

  put(
    url,
    data = {},
    headers = {},
    requestRetryAttemptsCount = DEFAULT_RETRY_ATTEMPTS
  ) {
    return this.send(
      {
        method: 'PUT',
        url,
        headers,
        body: JSON.stringify(data),
      },
      requestRetryAttemptsCount
    );
  }

  delete(
    url,
    data = {},
    headers = {},
    requestRetryAttemptsCount = DEFAULT_RETRY_ATTEMPTS
  ) {
    return this.send(
      {
        method: 'DELETE',
        url,
        headers,
        body: JSON.stringify(data),
      },
      requestRetryAttemptsCount
    );
  }

  patch(
    url,
    data = {},
    headers = {},
    requestRetryAttemptsCount = DEFAULT_RETRY_ATTEMPTS
  ) {
    return this.send(
      {
        method: 'PATCH',
        url,
        headers,
        body: JSON.stringify(data),
      },
      requestRetryAttemptsCount
    );
  }

  send(requestInfo, requestRetryAttemptsCount = DEFAULT_RETRY_ATTEMPTS) {
    return this.sendFetch(requestInfo, false, true, requestRetryAttemptsCount);
  }

  withFormData(
    method,
    url,
    data,
    headers = {},
    requestRetryAttemptsCount = DEFAULT_RETRY_ATTEMPTS
  ) {
    const options = {
      method,
      url,
      headers,
      body: data,
    };

    return this.sendFetch(options, true, true, requestRetryAttemptsCount);
  }

  otherSite(url, requestRetryAttemptsCount = DEFAULT_RETRY_ATTEMPTS) {
    const options = {
      method: 'GET',
      url,
    };

    return this.sendFetch(options, true, false, requestRetryAttemptsCount);
  }

  getStorage() {
    let domain = process.env.NEXT_PUBLIC_STORAGE;
    if (domain.endsWith('/')) {
      domain = domain.substr(0, domain.length - 1);
    }

    return domain;
  }

  getDomain() {
    let domain = process.env.NEXT_PUBLIC_HOST;
    if (domain.endsWith('/')) {
      domain = domain.substr(0, domain.length - 1);
    }

    return domain;
  }

  getDomainOrFull(pathname) {
    if (
      !pathname ||
      pathname.startsWith('http://') ||
      pathname.startsWith('https://')
    ) {
      return pathname;
    }

    let domain = process.env.NEXT_PUBLIC_HOST;
    if (domain.endsWith('/')) {
      domain = domain.substr(0, domain.length - 1);
    }

    return domain + pathname;
  }

  open(url) {
    const reqUrl = url[0] === '/' ? url.substr(1) : url;
    UrlService.openTab(`${this.getApiDomain()}${reqUrl}`);
  }

  getAppDomain() {
    const { protocol, hostname, port } = window.location;

    let domain = `${protocol}//${hostname}`;
    if (port) {
      domain = `${domain}:${port}`;
    }

    return domain;
  }

  getApiDomain() {
    // const lang = localStorage.getItem('i18nextLng') || 'en-US';
    // return this.getDomain() + '/api/application/' + lang + '/';
    return this.getDomain() + '/api/';
  }

  sendFetch(
    requestInfo,
    isFormData,
    isSame,
    requestRetryAttemptsCount = DEFAULT_RETRY_ATTEMPTS
  ) {
    const { url } = requestInfo;
    delete requestInfo.url;

    requestInfo.headers = {
      // "Accept": "application/json",
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'X-Request-With': 'XMLHttpRequest',
      ...this.defaultHeaders,
      ...requestInfo.headers,
    };

    if (!isFormData) {
      requestInfo.headers['Content-Type'] = 'application/json';
    }

    requestInfo.redirect = 'follow';
    // console.log("requestInfo: ", requestInfo);

    const handleAndNotifyHttpError = (error) => {
      if (error instanceof Response && error.status === 401) {
        // store.dispatch({ type: storeActions.AUTH_LOGOUT });
        return Promise.reject(error);
      } else {
        if (requestRetryAttemptsCount > 0) {
          requestInfo.url = url;
          return this.sendFetch(
            requestInfo,
            isFormData,
            isSame,
            requestRetryAttemptsCount - 1
          );
        }

        let message = 'Something went wrong.';
        if (!['prod', 'production'].includes(process.env.NODE_ENV)) {
          const getErrorMessage = (error) => {
            if (error instanceof Error) {
              return error.message;
            }

            if (error instanceof Response) {
              return `Error ${error.status} - ${error.statusText}`;
            }

            return error.toString();
          };

          message = `Something went wrong with your request, Error:<br />${getErrorMessage(
            error
          )}`;
        }

        // eslint-disable-next-line no-console
        console.error('Server error', message, 'error');

        return Promise.reject(error);
      }
    };

    try {
      const reqUrl = url[0] === '/' ? url.substr(1) : url;
      return fetch(`${isSame ? this.getApiDomain() : ''}${reqUrl}`, requestInfo)
        .then((response) => {
          if (response.status < 400) {
            return response;
          } else if (response.status < 500) {
            requestRetryAttemptsCount = -1;
            throw response;
          }

          throw response;
        })
        .catch((error) => handleAndNotifyHttpError(error));
    } catch (error) {
      return handleAndNotifyHttpError(error);
    }
  }
}

export default new HttpService();
