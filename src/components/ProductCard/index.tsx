import { CardContent, CardMedia, Typography, Box } from '@mui/material';
import * as S from './styles';
import { GoogleSearchResult } from '../../models/types';

interface ProductCardProps {
  product: GoogleSearchResult;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <S.ProductCard>
      {product.pagemap?.cse_image?.[0]?.src && (
        <CardMedia
          component="img"
          height="200"
          image={product.pagemap.cse_image[0].src}
          alt={product.title}
          sx={S.cardMedia}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" sx={S.cardTitle}>
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={S.cardDescription}
        >
          {product.snippet}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <S.ViewButton
          fullWidth
          variant="contained"
          href={product.link}
          rel="noopener"
        >
          View Product
        </S.ViewButton>
      </Box>
    </S.ProductCard>
  );
};

export default ProductCard;
