const url = new URL(window.location as any);

export function updateQueryParam(query: string, value: string) {
  url.searchParams.set(query, value);

  window.history.pushState({}, '', url);
}

export function getQueryParam(query: string) {
  return url.searchParams.get(query) || '';
}
