/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { FaMusic, FaUserAlt, FaCompactDisc, FaCalendarAlt } from "react-icons/fa";

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
  overflow: hidden;

  &:hover {
    background: #f8f9fa;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1;
    }
  }

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

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const MusicIcon = styled(FaMusic)`
  color: #0066ff;
  margin-right: 10px;
  flex-shrink: 0;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #333;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0;
  color: #666;
  font-size: 14px;
`;

const MetaIcon = styled.span`
  color: #999;
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 6px 10px;
  font-size: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;

  ${({ type }) =>
    type === "edit"
      ? `background-color: #ffd966;`
      : `background-color: #ff6b6b; color: white;`}

  &:hover {
    ${({ type }) =>
      type === "edit"
        ? `background-color: #ffcc33;`
        : `background-color: #ff5252;`}
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
        <HeaderRow>
          <MusicIcon size={18} />
          <Title>{song.title}</Title>
        </HeaderRow>

        <MetaRow>
          <MetaIcon><FaUserAlt size={12} /></MetaIcon>
          {song.artist}
        </MetaRow>

        <MetaRow>
          <MetaIcon><FaCompactDisc size={12} /></MetaIcon>
          {song.album}
        </MetaRow>

        <MetaRow>
          <MetaIcon><FaCalendarAlt size={12} /></MetaIcon>
          {song.year}
        </MetaRow>
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