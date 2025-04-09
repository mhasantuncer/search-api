import React from 'react';
import { CardContent, Box } from '@mui/material';
import * as S from './styles';
import { GoogleSearchResult } from '../../models/types';

interface ProductCardProps {
  product: GoogleSearchResult;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const imageUrl = product.pagemap?.cse_image?.[0]?.src;
  const truncatedTitle =
    product.title.length > 60
      ? `${product.title.substring(0, 60)}...`
      : product.title;

  return (
    <S.ProductCard>
      {imageUrl && (
        <Box
          component="img"
          height="200"
          src={imageUrl}
          alt={product.title}
          sx={S.ProductImage}
        />
      )}
      <CardContent>
        <S.ProductTitle gutterBottom variant="h6">
          {truncatedTitle}
        </S.ProductTitle>
        <S.ProductDescription variant="body2" color="text.secondary">
          {product.snippet}
        </S.ProductDescription>
      </CardContent>
      <Box p={2}>
        <S.ViewButton
          fullWidth
          variant="contained"
          href={product.link}
          rel="noopener noreferrer"
        >
          View Product
        </S.ViewButton>
      </Box>
    </S.ProductCard>
  );
};

export default ProductCard;
