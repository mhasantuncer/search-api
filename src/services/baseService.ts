import axios from 'axios';
import { GoogleSearchResponse } from '../models/types';

const API_KEY = 'AIzaSyDqScyKCmaNJLYhL8S4LqTWwO44SjTMSgw';
const CX = '1268040dc6cf74020';

const searchProducts = async (
  query: string,
  currentStartIndex: number
): Promise<GoogleSearchResponse> => {
  try {
    const response = await axios.get<GoogleSearchResponse>(
      `https://www.googleapis.com/customsearch/v1`,
      {
        params: {
          q: query,
          key: API_KEY,
          cx: CX,
          start: currentStartIndex,
          num: 10,
        },
      }
    );
    return response.data;
  } catch (error: unknown) {
    console.log(error instanceof Error ? error.message : 'Search API error:');
    throw error;
  }
};
export default searchProducts;
