import { Grid, Typography, CircularProgress } from '@mui/material';
import ProductCard from '../ProductCard';
import * as S from './styles';
import { GoogleSearchResult } from '../../models/types';

interface SearchResultsProps {
  results: GoogleSearchResult[];
  loading: boolean;
  query: string;
}

const SearchResults = ({ results, loading, query }: SearchResultsProps) => {
  if (loading) {
    return (
      <S.LoadingBox>
        <CircularProgress />
        <Typography sx={{ mt: 1 }}>Loading products...</Typography>
      </S.LoadingBox>
    );
  }

  if (results.length === 0) {
    return (
      <Typography variant="h6" align="center" sx={S.noResultsText}>
        {query
          ? 'No products with images found'
          : 'Enter a search term to begin'}
      </Typography>
    );
  }

  return (
    <Grid container spacing={3} justifyContent="center">
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
