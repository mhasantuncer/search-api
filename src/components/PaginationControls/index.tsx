import { ChangeEvent } from 'react';
import { Pagination } from '@mui/material';
import * as S from './styles';

interface PaginationControlsProps {
  totalResults: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationControls = ({
  totalResults,
  currentPage,
  onPageChange,
}: PaginationControlsProps) => {
  if (totalResults <= 10) return null;

  const handleChange = (_: ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  return (
    <S.PaginationBox>
      <Pagination
        count={Math.ceil(totalResults / 12)}
        page={currentPage}
        onChange={handleChange}
        color="primary"
      />
    </S.PaginationBox>
  );
};

export default PaginationControls;
