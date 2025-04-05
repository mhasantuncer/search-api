import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PaginationControls from './components/PaginationControls';
import { GoogleSearchResponse, GoogleSearchResult } from './models/types';
import * as S from './styles';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<GoogleSearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const API_KEY = 'AIzaSyDqScyKCmaNJLYhL8S4LqTWwO44SjTMSgw';
  const CX = '1268040dc6cf74020';

  const handleSearch = async (page: number = 1) => {
    if (!query) return;

    setLoading(true);
    try {
      const filteredItems: GoogleSearchResult[] = [];
      let currentStartIndex = (page - 1) * 10 + 1;
      let localTotalResults = 0;

      while (filteredItems.length < 12 && currentStartIndex < 200) {
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

        const newItems = response.data.items || [];

        if (localTotalResults === 0) {
          localTotalResults =
            Number(response.data.searchInformation?.totalResults) || 0;
        }

        const newFiltered = newItems.filter((item) => {
          const imageUrl = item.pagemap?.cse_image?.[0]?.src;
          if (!imageUrl) return false;

          return !['loading_light', 'no-image'].some((term) =>
            imageUrl.includes(term)
          );
        });

        filteredItems.push(...newFiltered);

        if (newItems.length < 10) break;
        currentStartIndex += 10;
      }

      setResults(filteredItems.slice(0, 12));
      setTotalResults(Math.min(localTotalResults, 200));
      setCurrentPage(page);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    handleSearch(page);
  };

  return (
    <S.AppContainer maxWidth="lg">
      <SearchBar
        query={query}
        loading={loading}
        onSearch={() => handleSearch()}
        onQueryChange={setQuery}
      />

      <S.ResultsContainer>
        <PaginationControls
          totalResults={totalResults}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

        <SearchResults results={results} loading={loading} query={query} />

        {totalResults > 10 && (
          <PaginationControls
            totalResults={totalResults}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </S.ResultsContainer>
    </S.AppContainer>
  );
};

export default App;
