import axios from 'axios';
import { QueryClient } from 'react-query';

export const queryClient = new QueryClient();

export const api = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v3',
});
