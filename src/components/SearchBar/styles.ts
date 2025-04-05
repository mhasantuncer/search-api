import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SearchBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[3],
  width: '100%',
  maxWidth: 800,
  textAlign: 'center',
}));

export const SearchButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
