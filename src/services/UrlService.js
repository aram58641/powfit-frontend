class UrlService {
  parseQueryString(query) {
    const vars = query.split('&');
    const queryString = {};

    for (let i = 0; i < vars.length; ++i) {
      const pair = vars[i].split('=');
      const key = decodeURIComponent(pair[0]);
      const value = decodeURIComponent(pair[1]);

      if (typeof queryString[key] === 'undefined') {
        queryString[key] = decodeURIComponent(value);
      } else if (typeof queryString[key] === 'string') {
        const arr = [queryString[key], decodeURIComponent(value)];
        queryString[key] = arr;
      } else {
        queryString[key].push(decodeURIComponent(value));
      }
    }

    return queryString;
  }

  getUrlParam(key) {
    const queryString = window.location.search.substring(1);
    const data = this.parseQueryString(queryString);

    return data[key] || null;
  }

  replaceUrl(newUrl) {
    if (
      typeof window !== 'undefined' &&
      window &&
      window.location &&
      window.history &&
      window.history.replaceState
    ) {
      window.history.replaceState({}, '', newUrl);
    }
  }

  removeParam(param) {
    if (
      typeof window !== 'undefined' &&
      window &&
      window.location &&
      window.history &&
      window.history.replaceState
    ) {
      const value = this.getUrlParam(param) || '';
      const newUrl = window.location.href
        .replace(`?${param}=${value}&`, '?')
        .replace(`?${param}=${value}`, '')
        .replace(`&${param}=${value}`, '')
        .replace(`?${param}=&`, '?')
        .replace(`?${param}=`, '')
        .replace(`&${param}=`, '')
        .replace(`?${param}&`, '?')
        .replace(`?${param}`, '')
        .replace(`&${param}`, '');

      this.replaceUrl(newUrl);
    }
  }

  removeHash() {
    if (typeof window !== 'undefined' && window && window.location) {
      window.location.hash = '';
    }
  }

  popup(url, options) {
    const optionsStr = Object.keys(options)
      .reduce((acc, key) => {
        acc.push(`${key}=${options[key]}`);
        return acc;
      }, [])
      .join(',');

    return window.open(url, 'popup', optionsStr);
  }

  openTab(url) {
    window.open(url, 'BLANK');
  }
}

export default new UrlService();
