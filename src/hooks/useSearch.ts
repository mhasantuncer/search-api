import { useState } from 'react';
import { GoogleSearchResult } from '../models/types';
import searchProducts from '../services/baseService';

const useSearch = () => {
  const [results, setResults] = useState<GoogleSearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filteredTotal, setFilteredTotal] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const RESULTS_PER_PAGE = 12;
  const ITEMS_PER_API_CALL = 10;
  const MAX_API_RESULTS = 100;

  const handleSearch = async (query: string, page: number = 1) => {
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      let allFilteredItems: GoogleSearchResult[] = [];
      let currentStartIndex = 1;

      // Collect filtered items until we have enough for requested page
      while (
        allFilteredItems.length < RESULTS_PER_PAGE * page &&
        currentStartIndex <= MAX_API_RESULTS
      ) {
        const response = await searchProducts(query, currentStartIndex);

        const newFiltered = (response.items || []).filter((item) => {
          const imageUrl = item.pagemap?.cse_image?.[0]?.src;
          return (
            imageUrl &&
            !['loading_light', 'no-image'].some((term) =>
              imageUrl.includes(term)
            )
          );
        });

        allFilteredItems = [...allFilteredItems, ...newFiltered];
        currentStartIndex += ITEMS_PER_API_CALL;
      }

      const actualAvailablePages = Math.ceil(
        allFilteredItems.length / RESULTS_PER_PAGE
      );
      const adjustedPage = Math.min(page, actualAvailablePages);

      if (page !== adjustedPage) {
        setLoading(false);
        return handleSearch(query, adjustedPage);
      }

      const startIdx = (adjustedPage - 1) * RESULTS_PER_PAGE;
      const endIdx = startIdx + RESULTS_PER_PAGE;
      setResults(allFilteredItems.slice(startIdx, endIdx));
      setFilteredTotal(allFilteredItems.length);
    } catch (error) {
      setError('Failed to fetch results. Please try again.');
      console.error(error instanceof Error ? error.message : 'Search error:');
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, totalResults: filteredTotal, error, handleSearch };
};

export default useSearch;
