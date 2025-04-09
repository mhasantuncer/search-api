import React from 'react';
import { Grid, Typography, CircularProgress } from '@mui/material';
import ProductCard from '../ProductCard';
import * as S from './styles';
import { GoogleSearchResult } from '../../models/types';

interface SearchResultsProps {
  results: GoogleSearchResult[];
  loading: boolean;
  query: string;
  error: string | null;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  loading,
  query,
  error,
}) => {
  if (loading) {
    return (
      <S.LoadingContainer>
        <CircularProgress size={60} />
        <Typography variant="body1" mt={2}>
          Searching products...
        </Typography>
      </S.LoadingContainer>
    );
  }

  if (error) {
    return (
      <S.MessageContainer>
        <Typography color="error">{error}</Typography>
      </S.MessageContainer>
    );
  }

  if (results.length === 0) {
    return (
      <S.MessageContainer>
        <Typography variant="h6">
          {query ? 'No products found' : 'Enter a search term to begin'}
        </Typography>
      </S.MessageContainer>
    );
  }

  return (
    <Grid container spacing={4} justifyContent="center">
      {results.map((item, index) => (
        <Grid
          key={`${item.link}-${index}`}
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
        >
          <ProductCard product={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchResults;
