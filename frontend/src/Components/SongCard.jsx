/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Card = styled.div`
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden; /* For the gradient accent */

  &:hover {
    background: #f8f9fa; /* Light gray background */
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1; /* Show gradient accent */
    }
  }

  /* Gradient accent bar (hidden by default) */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ffd966, #ff6b6b);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 0 0 4px 0;
  position: relative; /* Ensure text stays above overlay */
`;

const Text = styled.p`
  margin: 4px 0;
  color: #666;
  position: relative; /* Ensure text stays above overlay */
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
  position: relative; /* Ensure buttons stay above overlay */
`;

const Button = styled.button`
  padding: 6px 10px;
  font-size: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative; /* Ensure button content stays above overlay */

  ${({ type }) =>
    type === "edit"
      ? `background-color: #ffd966;`
      : `background-color: #ff6b6b; color: white;`}

  &:hover {
    ${({ type }) =>
      type === "edit"
        ? `background-color: #ffcc33;` /* Darker yellow */
        : `background-color: #ff5252;` /* Darker red */
    }
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const SongCard = ({ song, onEdit, onDelete }) => {
  return (
    <Card>
      <div>
        <Title>{song.title}</Title>
        <Text>Artist: {song.artist}</Text>
        <Text>Album: {song.album}</Text>
        <Text>Year: {song.year}</Text>
      </div>
      <Actions>
        <Button type="edit" onClick={() => onEdit(song)}>
          Edit
        </Button>
        <Button onClick={() => onDelete(song)}>
          Delete
        </Button>
      </Actions>
    </Card>
  );
};

export default SongCard;