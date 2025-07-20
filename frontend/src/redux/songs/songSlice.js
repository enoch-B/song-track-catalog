import { createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
  name: 'songs',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchSongs: (state) => {
      state.loading = true;
    },
    fetchSongsSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchSongsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Add createSong,
    createSong: (state) => {
  state.loading = true;
},
createSongSuccess: (state, action) => {
  state.loading = false;
  state.items.push(action.payload);
},
createSongFailure: (state, action) => {
  state.loading = false;
  state.error = action.payload;
},
      // update song
      updateSong: (state) => {
  state.loading = true;
},
updateSongSuccess: (state, action) => {
  state.loading = false;
  const index = state.items.findIndex(s => s.id === action.payload.id);
  if (index !== -1) {
    state.items[index] = action.payload;
  }
},
updateSongFailure: (state, action) => {
  state.loading = false;
  state.error = action.payload;
},
deleteSong: (state) => {
  state.loading = true;
},
deleteSongSuccess: (state, action) => {
  state.loading = false;
  state.items = state.items.filter(song => song.id !== action.payload);
},
deleteSongFailure: (state, action) => {
  state.loading = false;
  state.error = action.payload;
},



  },
});

export const {
  fetchSongs,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSong,
  createSongSuccess,
  createSongFailure,
  updateSong,
  updateSongSuccess,
  updateSongFailure,
  deleteSong,
  deleteSongSuccess,
  deleteSongFailure
} = songSlice.actions;


export default songSlice.reducer;
