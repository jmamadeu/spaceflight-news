import { useQuery } from 'react-query';
import { api } from '../clients/api';

export type SpaceFlightNewsProperties = {
  title: string;
  summary: string;
  publishedAt: Date | string;
  url: string;
  imageUrl: string;
  id: string;
};

type SpaceFlightSearchOptions = {
  limit?: number;
  sortParam?: string;
  search?: string;
};

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
