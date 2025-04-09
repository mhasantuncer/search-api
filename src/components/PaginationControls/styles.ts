import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const PaginationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(4, 0),
  margin: theme.spacing(2, 0),
}));
