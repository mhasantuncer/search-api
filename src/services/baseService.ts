import axios from 'axios';
import { GoogleSearchResponse } from '../models/types';

const BASE_URL = 'https://www.googleapis.com/customsearch/v1';
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const CX = import.meta.env.VITE_GOOGLE_CX;

const searchProducts = async (
  query: string,
  currentStartIndex: number
): Promise<GoogleSearchResponse> => {
  try {
    const response = await axios.get<GoogleSearchResponse>(BASE_URL, {
      params: {
        q: query,
        key: API_KEY,
        cx: CX,
        start: currentStartIndex,
        num: 10,
      },
    });
    return response.data;
  } catch (error: unknown) {
    console.log(error instanceof Error ? error.message : 'Search API error:');
    throw error;
  }
};
export default searchProducts;
