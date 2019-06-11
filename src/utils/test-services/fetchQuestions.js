import axios from 'axios';
import { apiBaseUrl } from '../http/api';

export default async () => {
  const response = await axios.get(apiBaseUrl);
  const data = await response.data;
  return data;
};
