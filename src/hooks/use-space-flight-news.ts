import { useQuery } from 'react-query';
import { api } from '../clients/api';

export type SpaceFlightNewsProperties = {
  title: string;
  summary: string;
  publishedAt: Date;
  url: string;
  imageUrl: string;
  id: string;
};

type SpaceFlightSearchOptions = {
  limit?: number;
  order?: string;
  search?: string;
};

export function useSpaceFlightNews({
  limit = 10,
  order = '',
  search = '',
}: SpaceFlightSearchOptions) {
  return useQuery(
    ['spaceFlightNews', limit, order],
    () =>
      api
        .get<SpaceFlightNewsProperties[]>(
          `/articles?_limit=${limit}&_sort=${order}&title_contains=${search}`
        )
        .then((res) => res.data),
    { keepPreviousData: true }
  );
}
