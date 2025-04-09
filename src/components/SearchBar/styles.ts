import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

export const SearchContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[2],
  width: '100%',
  maxWidth: 800,
  margin: '0 auto',
}));

export const SearchButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5),
  width: '100%',
  maxWidth: 200,
  margin: '0 auto',
}));
