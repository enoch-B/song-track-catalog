import { call, put, takeLatest } from 'redux-saga/effects';
import { createSong, createSongSuccess, createSongFailure } from './songSlice';
import { updateSong, updateSongSuccess, updateSongFailure } from './songSlice';
import {fetchSongs, fetchSongsSuccess, fetchSongsFailure,} from './songSlice';
import { deleteSong, deleteSongSuccess, deleteSongFailure } from './songSlice';
import { toast } from 'react-toastify';


/*
// Mock data to simulate API response
const mockData = [
    { id: 1, title: "Yikr Silalkegn nw", artist: "Abel Mekbib", album: "Yikr Silalkegn", year: 2024 },
    { id: 2, title: "Yelibe Desta", artist: "Endalkachew Dagne", album: "Yelibe Desta", year: 2021 },
    { id: 3, title: "ማረኝ", artist: "Yilma Hailu", album: "Maregn", year: 2021 },
    { id: 4, title: "Yemalalfew Yelem", artist: "Endalkachew Dagne", album: "Yelibe Desta", year: 2021 }
];
//  This replaces an actual API call
const fetchSongsFromApi = async () => {
return new Promise((resolve) => {
setTimeout(() => resolve(mockData), 500); // simulate network delay
});
}
*/

const fetchSongsFromApi = async () => {
const response = await fetch(`${process.env.API_BASE_URL}/Songs`);
if (!response.ok) throw new Error('Failed to fetch');
return await response.json();
};

function* handleFetchSongs() {
try {
const data = yield call(fetchSongsFromApi);
yield put(fetchSongsSuccess(data));
} catch (error) {
yield put(fetchSongsFailure(error.message));
}
}


function* handleCreateSong(action) {
try {
const response = yield call(() =>
  fetch(`${process.env.API_BASE_URL}/Songs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.payload),
  })
);

const data = yield response.json();

yield put(createSongSuccess(data));
toast.success('Song added!');

} catch (error) {
yield put(createSongFailure(error.message));
 toast.error('❌ Failed to add song');
}
}



function* handleUpdateSong(action) {
try {
const response = yield call(() =>
  fetch(`${process.env.API_BASE_URL}/Songs/${action.payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.payload),
  })
);

const data = yield response.json();

yield put(updateSongSuccess(data));
toast.info('Song updated');

} catch (error) {
yield put(updateSongFailure(error.message));
}
}



function* handleDeleteSong(action) {
try {
    if (!action.payload) {
        console.error("Delete failed: No song ID provided");
        return;
      }
yield call(() =>
  fetch(`${process.env.API_BASE_URL}/Songs/${action.payload}`, {
    method: 'DELETE',
  })
);

yield put(deleteSongSuccess(action.payload));
toast.warn('Song deleted!');

} catch (error) {
yield put(deleteSongFailure(error.message));
}
}



export default function* songSaga() {
yield takeLatest(fetchSongs.type, handleFetchSongs);
yield takeLatest(createSong.type, handleCreateSong);
yield takeLatest(updateSong.type, handleUpdateSong);
yield takeLatest(deleteSong.type, handleDeleteSong);


}