import React from 'react';
import { TextField, CircularProgress } from '@mui/material';
import * as S from './styles';

interface SearchBarProps {
  query: string;
  loading: boolean;
  onSearch: () => void;
  onQueryChange: (value: string) => void;
}

const SearchBar = ({
  query,
  loading,
  onSearch,
  onQueryChange,
}: SearchBarProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') onSearch();
  };

  return (
    <S.SearchContainer>
      <TextField
        fullWidth
        label="Search Webhallen"
        variant="outlined"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        onKeyDown={handleKeyPress}
        disabled={loading}
        sx={{ mb: 2 }}
      />
      <S.SearchButton
        variant="contained"
        onClick={onSearch}
        disabled={loading || !query}
      >
        {loading ? <CircularProgress size={24} /> : 'Search'}
      </S.SearchButton>
    </S.SearchContainer>
  );
};

export default SearchBar;
