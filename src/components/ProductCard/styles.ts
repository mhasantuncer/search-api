import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

export const ProductCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  boxShadow: theme.shadows[2],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

export const ProductImage = {
  width: '100%',
  objectFit: 'cover',
  height: 200,
  backgroundColor: '#f5f5f5',
};

export const ProductTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  color: theme.palette.text.primary,
}));

export const ProductDescription = styled(Typography)(({ theme }) => ({
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  minHeight: '6em',
  color: theme.palette.text.secondary,
}));

export const ViewButton = styled(Button)(({ theme }) => ({
  marginTop: 'auto',
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
})) as typeof Button;
