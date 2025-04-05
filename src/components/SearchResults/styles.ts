import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ResultsContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 1200,
  marginTop: theme.spacing(4),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  textAlign: 'center',
}));

export const LoadingBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

export const noResultsText = {
  marginTop: 4,
  color: 'text.secondary',
};
