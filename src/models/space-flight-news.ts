export type SpaceFlightNewsProperties = {
  title: string;
  summary: string;
  publishedAt: Date | string;
  url: string;
  imageUrl: string;
  id: string;
};

export type SpaceFlightSearchOptions = {
  limit?: number;
  sortParam?: string;
  search?: string;
};

export type DetailsFlightProperties = Partial<SpaceFlightNewsProperties> & {
  variant?: string;
  onOpen?: () => void;
};

export type SpaceFlightDetailsProperties = {
  spaceFlight: SpaceFlightNewsProperties;
  isInverted: boolean;
};
