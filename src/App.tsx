import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  Box,
  Container,
  Pagination,
} from '@mui/material';
import axios from 'axios';

interface SearchInformation {
  totalResults: string;
  searchTime: number;
}

interface GoogleSearchResult {
  title: string;
  link: string;
  snippet: string;
  pagemap?: {
    cse_image?: Array<{ src: string }>;
  };
}

interface GoogleSearchResponse {
  items?: GoogleSearchResult[];
  searchInformation?: SearchInformation;
}

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
          // only set once
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

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    handleSearch(page);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        paddingY: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: '100%',
          maxWidth: 800,
          textAlign: 'center',
        }}
      >
        <TextField
          label="Search Products"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          fullWidth
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          onClick={() => handleSearch()}
          disabled={loading}
          size="large"
          sx={{
            backgroundColor: '#1976d2',
            '&:hover': { backgroundColor: '#1565c0' },
          }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Search'}
        </Button>
      </Box>

      <Box
        sx={{
          width: '100%',
          maxWidth: 1200,
          mt: 4,
          px: { xs: 2, sm: 3 },
          textAlign: 'center',
        }}
      >
        {loading && (
          <Box sx={{ textAlign: 'center', my: 4 }}>
            <CircularProgress />
            <Typography sx={{ mt: 1 }}>Loading products...</Typography>
          </Box>
        )}

        {!loading && results.length === 0 && (
          <Typography
            variant="h6"
            align="center"
            sx={{
              mt: 4,
              color: 'text.secondary',
            }}
          >
            {query
              ? 'No products with images found'
              : 'Enter a search term to begin'}
          </Typography>
        )}
        {totalResults > 10 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <Pagination
              count={Math.ceil(totalResults / 12)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        )}
        <Grid container spacing={3} justifyContent="center">
          {results.map((item, index) => (
            <Grid
              key={`${item.link}-${index}`}
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: 3,
                  },
                }}
              >
                {item.pagemap?.cse_image?.[0]?.src && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.pagemap.cse_image[0].src}
                    alt={item.title}
                    sx={{
                      objectFit: 'contain',
                      backgroundColor: '#f9f9f9',
                      p: 2,
                    }}
                  />
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: 'bold',
                      minHeight: '3em',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      minHeight: '4em',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {item.snippet}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    href={item.link}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      backgroundColor: '#1976d2',
                      '&:hover': { backgroundColor: '#1565c0' },
                    }}
                  >
                    View Product
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {totalResults > 10 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <Pagination
              count={Math.ceil(totalResults / 12)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default App;
