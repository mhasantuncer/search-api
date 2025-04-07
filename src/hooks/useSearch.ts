import { useState } from 'react';
import { GoogleSearchResult } from '../models/types';
import searchProducts from '../services/baseService';

const useSearch = () => {
  //   const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<GoogleSearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string, page: number = 1) => {
    if (!query) return;
    setLoading(true);
    setError(null);
    try {
      const filteredItems: GoogleSearchResult[] = [];
      let currentStartIndex = (page - 1) * 10 + 1;
      let localTotalResults = 0;
      while (filteredItems.length < 12 && currentStartIndex < 200) {
        const response = await searchProducts(query, currentStartIndex);
        const newItems = response.items || [];
        if (localTotalResults === 0) {
          localTotalResults =
            Number(response.searchInformation?.totalResults) || 0;
        }
        const newFiltered = newItems.filter((item) => {
          const imageUrl = item.pagemap?.cse_image?.[0]?.src;
          return (
            imageUrl &&
            !['loading_light', 'no-image'].some((term) =>
              imageUrl.includes(term)
            )
          );
        });
        filteredItems.push(...newFiltered);
        if (newItems.length < 10) break;
        currentStartIndex += 10;
      }
      setResults(filteredItems.slice(0, 12));
      setTotalResults(Math.min(localTotalResults, 200));
    } catch (error) {
      setError('Failed to fetch results!');
      console.log(error instanceof Error ? error.message : 'Search error:');
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { results, loading, totalResults, error, handleSearch };
};

export default useSearch;
