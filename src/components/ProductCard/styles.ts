import { Card, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[3],
  },
}));

export const cardMedia = {
  objectFit: 'contain',
  backgroundColor: '#f9f9f9',
  p: 2,
};

export const cardTitle = {
  fontWeight: 'bold',
  minHeight: '3em',
};

export const cardDescription = {
  minHeight: '4em',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

export const ViewButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
