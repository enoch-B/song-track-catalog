/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
`;

const PageInfo = styled.span`
  font-size: 14px;
  color: #666;
  margin: 0 12px;
`;

const PageButton = styled.button`
  padding: 6px 12px;
  min-width: 36px;
  font-size: 14px;
  border: 1px solid #ddd;
  background: ${({ active }) => (active ? "#0066ff" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ active }) => (active ? "#0052cc" : "#f5f5f5")};
    border-color: #ccc;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const IconButton = styled(PageButton)`
  padding: 6px 8px;
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <PaginationContainer>
      <IconButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPrevious}
        aria-label="Previous page"
      >
        <FaChevronLeft size={14} />
      </IconButton>

      {Array.from({ length: totalPages }, (_, index) => (
        <PageButton
          key={index}
          active={index + 1 === currentPage}
          onClick={() => onPageChange(index + 1)}
          aria-current={index + 1 === currentPage ? "page" : undefined}
        >
          {index + 1}
        </PageButton>
      ))}

      <IconButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNext}
        aria-label="Next page"
      >
        <FaChevronRight size={14} />
      </IconButton>

      <PageInfo>
        Page {currentPage} of {totalPages}
      </PageInfo>
    </PaginationContainer>
  );
};

export default Pagination;