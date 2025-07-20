/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FaSearch, FaTimes, FaSpinner } from 'react-icons/fa';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
`;

const SearchInput = styled.input`
  padding: 12px 40px 12px 16px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  width: 100%;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: #0066ff;
    box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  right: ${props => props.hasValue ? '40px' : '16px'};
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  transition: all 0.3s ease;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 4px;
  transition: all 0.2s ease;

  &:hover {
    color: #666;
  }
`;

const LoadingSpinner = styled(FaSpinner)`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from { transform: translateY(-50%) rotate(0deg); }
    to { transform: translateY(-50%) rotate(360deg); }
  }
`;

const SearchBar = ({ onSearch, loading = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Trigger search when debounced term changes
  useEffect(() => {
    onSearch(debouncedTerm);
  }, [debouncedTerm, onSearch]);

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title..."
      />
      
      {searchTerm && !loading && (
        <ClearButton onClick={handleClear} aria-label="Clear search">
          <FaTimes size={14} />
        </ClearButton>
      )}
      
      {loading ? (
        <LoadingSpinner size={14} />
      ) : (
        <SearchIcon hasValue={searchTerm.length > 0}>
          <FaSearch size={14} />
        </SearchIcon>
      )}
    </SearchContainer>
  );
};

export default SearchBar;