/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import SongCard from "./SongCard";

const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr; 
  max-width: 750px; 
  margin: 0 auto;


`;

const SongList = ({ songs, onEdit, onDelete }) => {
    if (!songs || songs.length === 0) return <p>No songs found.</p>;
  
    return (
      <Grid>
        {songs.map((song, index) => (
          <SongCard
            key={song.id ?? index}
            song={song}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </Grid>
    );
  };
  

export default SongList;
