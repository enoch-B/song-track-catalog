const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let songs = [
//   { id: 1, title: "Yikr Silalkegn nw", artist: "Abel Mekbib", album: "Yikr Silalkegn", year: 2024 },
//   { id: 2, title: "Yelibe Desta", artist: "Endalkachew Dagne", album: "Yelibe Desta", year: 2021 },
//   { id: 3, title: "ማረኝ", artist: "Yilma Hailu", album: "Maregn", year: 2021 },
//   { id: 4, title: "Yemalalfew Yelem", artist: "Endalkachew Dagne", album: "Yelibe Desta", year: 2021 },
];

// GET all songs
app.get('/Songs', (req, res) => {
  res.json(songs);
});

// POST new song
app.post('/Songs', (req, res) => {
  const newSong = req.body;
  songs.push(newSong);
  res.status(201).json(newSong);
});

// PUT update song
app.put('/Songs/:id', (req, res) => {
  const songId = parseInt(req.params.id);
  const index = songs.findIndex(song => song.id === songId);
  if (index === -1) return res.status(404).send('Song not found');
  songs[index] = req.body;
  res.json(songs[index]);
});

// DELETE song
app.delete('/Songs/:id', (req, res) => {
  const songId = parseInt(req.params.id);
  const index = songs.findIndex(song => song.id === songId);
  if (index === -1) return res.status(404).send('Song not found');
  const deleted = songs.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(PORT, () => {
  console.log(`🎵 Express API running at http://localhost:${PORT}`);
});
