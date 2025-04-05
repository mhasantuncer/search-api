import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AppContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

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
