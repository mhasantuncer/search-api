import { Pagination } from '@mui/material';
import * as S from './styles';

interface PaginationControlsProps {
  totalResults: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
}

const RESULTS_PER_PAGE = 12;

const PaginationControls = ({
  totalResults,
  currentPage,
  onPageChange,
  disabled = false,
}: PaginationControlsProps) => {
  if (totalResults <= RESULTS_PER_PAGE) return null;

  const pageCount = Math.ceil(totalResults / RESULTS_PER_PAGE);

  return (
    <S.PaginationContainer>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={(_, page) => onPageChange(page)}
        color="primary"
        size="large"
        disabled={disabled}
      />
    </S.PaginationContainer>
  );
};

export default PaginationControls;
