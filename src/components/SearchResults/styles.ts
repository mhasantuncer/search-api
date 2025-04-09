import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '300px',
  padding: theme.spacing(4),
}));

export const MessageContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  margin: theme.spacing(4, 0),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));
