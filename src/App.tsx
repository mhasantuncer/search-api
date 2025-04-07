import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PaginationControls from './components/PaginationControls';
import * as S from './styles';
import useSearch from './hooks/useSearch';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const { results, loading, totalResults, error, handleSearch } = useSearch();

  const handlePageChange = (page: number) => {
    handleSearch(query, page);
  };

  return (
    <S.AppContainer maxWidth="lg">
      <SearchBar
        query={query}
        loading={loading}
        onSearch={() => handleSearch(query)}
        onQueryChange={setQuery}
      />

      <S.ResultsContainer>
        <PaginationControls
          totalResults={totalResults}
          currentPage={1}
          onPageChange={handlePageChange}
        />

        <SearchResults
          results={results}
          loading={loading}
          query={query}
          // error={error}
        />

        {totalResults > 10 && (
          <PaginationControls
            totalResults={totalResults}
            currentPage={1}
            onPageChange={handlePageChange}
          />
        )}
      </S.ResultsContainer>
    </S.AppContainer>
  );
};

export default App;
