import { useState } from 'react';
import { Container, Box } from '@mui/material';
import useSearch from './hooks/useSearch';
import theme from './styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import PaginationControls from './components/PaginationControls';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

const App = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { results, loading, totalResults, error, handleSearch } = useSearch();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    handleSearch(query, page);
  };

  const handleNewSearch = () => {
    setCurrentPage(1);
    handleSearch(query, 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 6 }}>
          <SearchBar
            query={query}
            loading={loading}
            onSearch={handleNewSearch}
            onQueryChange={setQuery}
          />
        </Box>

        <PaginationControls
          totalResults={totalResults}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          disabled={loading}
        />

        <SearchResults
          results={results}
          loading={loading}
          query={query}
          error={error}
        />

        {totalResults > 12 && (
          <PaginationControls
            totalResults={totalResults}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            disabled={loading}
          />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
