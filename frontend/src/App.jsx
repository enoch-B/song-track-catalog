import React, { useState, useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchSongs,
  createSong,
  updateSong,
  deleteSong,
} from "./redux/songs/songSlice";

// Eagerly loaded components
import SearchBar from "./Components/SearchBar";
import AddSongButton from "./Components/AddSongButton";
import SongList from "./Components/SongList";
import Pagination from "./Components/Pagination";

// Lazy-loaded modals
const AddSongForm = lazy(() => import("./Components/AddSongForm"));
const EditSongForm = lazy(() => import("./Components/EditSongForm"));
const DeleteConfirmModal = lazy(() => import("./Components/DeleteConfirmModal"));

// Toast notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  const { items: songs, loading } = useSelector((state) => state.songs);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [editingSong, setEditingSong] = useState(null);
  const [deleteFormOpen, setDeleteFormOpen] = useState(false);
  const [deletingSong, setDeletingSong] = useState(null);

  const perPage = 4;

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  const filteredSongs = songs.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedSongs = filteredSongs.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const handleAddSong = (song) => {
    dispatch(createSong({ id: Date.now(), ...song, year: parseInt(song.year) }));
  };

  const handleEdit = (song) => {
    setEditingSong(song);
    setEditFormOpen(true);
  };

  const handleUpdateSong = (song) => {
    dispatch(updateSong(song));
  };

  const handleDeleteRequest = (song) => {
    setDeletingSong(song);
    setDeleteFormOpen(true);
  };

  const handleConfirmDelete = (id) => {
    dispatch(deleteSong(id));
    setDeleteFormOpen(false);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
        <h1 style={{ color: "blue", fontSize: "2rem", fontWeight: "bold", marginBottom: "20px"}}>🎵 Song Manager</h1>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <SearchBar onSearch={setSearch} />
        <AddSongButton onClick={() => setShowForm(true)} />
      </div>

      {loading ? (
        <p>Loading songs...</p>
      ) : (
        <>
          <SongList
            songs={paginatedSongs}
            onEdit={handleEdit}
            onDelete={handleDeleteRequest}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredSongs.length / perPage)}
            onPageChange={setCurrentPage}
          />

          <Suspense fallback={<div>Loading form...</div>}>
            {editFormOpen && editingSong && (
              <EditSongForm
                song={editingSong}
                onClose={() => setEditFormOpen(false)}
                onSubmit={handleUpdateSong}
              />
            )}
          </Suspense>

          <Suspense fallback={<div>Loading confirmation...</div>}>
            {deleteFormOpen && deletingSong && (
              <DeleteConfirmModal
                song={deletingSong}
                onCancel={() => setDeleteFormOpen(false)}
                onConfirm={handleConfirmDelete}
              />
            )}
          </Suspense>
        </>
      )}

      <Suspense fallback={<div>Loading form...</div>}>
        {showForm && (
          <AddSongForm onClose={() => setShowForm(false)} onSubmit={handleAddSong} />
        )}
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
