import { TextField, CircularProgress } from '@mui/material';
import * as S from './styles';
import { KeyboardEvent } from 'react';

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
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <S.SearchBox>
      <TextField
        label="Search Products"
        variant="outlined"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        fullWidth
        onKeyDown={handleKeyPress}
        sx={{ mb: 2 }}
      />
      <S.SearchButton
        variant="contained"
        onClick={onSearch}
        disabled={loading}
        size="large"
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Search'}
      </S.SearchButton>
    </S.SearchBox>
  );
};

export default SearchBar;
