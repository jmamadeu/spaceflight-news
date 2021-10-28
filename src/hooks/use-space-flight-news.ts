import { useQuery } from 'react-query';
import { api } from '../clients/api';
import {
  SpaceFlightNewsProperties,
  SpaceFlightSearchOptions,
} from '../models/space-flight-news';

export function useSpaceFlightNews({
  limit = 10,
  sortParam = '',
  search = '',
}: SpaceFlightSearchOptions) {
  return useQuery(
    ['spaceFlightNews', limit, sortParam, search],
    () =>
      api
        .get<SpaceFlightNewsProperties[]>(
          `/articles?_limit=${limit}&_sort=${sortParam}&title_contains=${search}`
        )
        .then((res) => res.data),
    { keepPreviousData: true }
  );
}
