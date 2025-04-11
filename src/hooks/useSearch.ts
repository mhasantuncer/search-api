import { useState, useRef, useEffect } from 'react';
import { GoogleSearchResult } from '../models/types';
import searchProducts from '../services/baseService';

const useSearch = () => {
  const [results, setResults] = useState<GoogleSearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filteredTotal, setFilteredTotal] = useState<number>(0);

  const cacheRef = useRef<{ [query: string]: GoogleSearchResult[] }>({});
  const currentQueryRef = useRef<string>('');

  const RESULTS_PER_PAGE = 12;
  const ITEMS_PER_API_CALL = 10;
  const MAX_API_RESULTS = 100;

  // Load cache from localStorage
  useEffect(() => {
    const cachedData = localStorage.getItem('searchCache');
    if (cachedData) {
      cacheRef.current = JSON.parse(cachedData);
    }
  }, []);

  // Save cache to localStorage on update to avoid hitting the 100-request/day quota
  const updateCache = (query: string, data: GoogleSearchResult[]) => {
    cacheRef.current[query] = data;
    localStorage.setItem('searchCache', JSON.stringify(cacheRef.current));
  };

  const handleSearch = async (query: string, page: number = 1) => {
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const cachedItems = cacheRef.current[query];

      if (cachedItems) {
        currentQueryRef.current = query;
        const maxPages = Math.ceil(cachedItems.length / RESULTS_PER_PAGE);
        const safePage = Math.min(page, maxPages);

        const start = (safePage - 1) * RESULTS_PER_PAGE;
        const end = start + RESULTS_PER_PAGE;

        setResults(cachedItems.slice(start, end));
        setFilteredTotal(cachedItems.length);
        setLoading(false);
        return;
      }

      // New search, fetch from API
      currentQueryRef.current = query;
      let allFilteredItems: GoogleSearchResult[] = [];
      let currentStartIndex = 1;

      while (
        currentStartIndex <= MAX_API_RESULTS &&
        allFilteredItems.length < MAX_API_RESULTS
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

        if (!response.items || response.items.length === 0) break;
      }

      updateCache(query, allFilteredItems);
      setFilteredTotal(allFilteredItems.length);

      const start = (page - 1) * RESULTS_PER_PAGE;
      const end = start + RESULTS_PER_PAGE;

      setResults(allFilteredItems.slice(start, end));
    } catch (error) {
      setError('Failed to fetch results. Please try again.');
      console.error(error instanceof Error ? error.message : 'Search error');
    } finally {
      setLoading(false);
    }
  };

  return {
    results,
    loading,
    totalResults: filteredTotal, // Based on actual data length
    error,
    handleSearch,
  };
};

export default useSearch;
