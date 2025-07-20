/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Button = styled.button`
  padding: 12px 24px;
  background-color: #0066ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 102, 255, 0.2);
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #0052cc;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 102, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 102, 255, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.3);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%, -50%);
    transform-origin: 50% 50%;
  }

  &:focus:not(:active)::after {
    animation: ripple 0.6s ease-out;
  }

  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    100% {
      transform: scale(20, 20);
      opacity: 0;
    }
  }
`;

const PlusIcon = styled.span`
  font-size: 18px;
  line-height: 1;
`;

const AddSongButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <PlusIcon>+</PlusIcon>
    Add Song
  </Button>
);

export default AddSongButton;