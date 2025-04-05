import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PaginationBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));
