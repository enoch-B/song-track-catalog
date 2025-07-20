/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import styled from "@emotion/styled";

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const Field = styled.input`
  display: block;
  margin-bottom: 14px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const Button = styled.button`
  padding: 8px 12px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  ${({ variant }) =>
    variant === "cancel"
      ? "background: #eee;"
      : "background: #0066ff; color: white;"}
`;

const AddSongForm = ({ onClose, onSubmit }) => {
    const [song, setSong] = useState({
      title: "",
      artist: "",
      album: "",
      year: "",
    });
    const [errors, setErrors] = useState({}); // Track validation errors
  
    const handleChange = (e) => {
      setSong({ ...song, [e.target.name]: e.target.value });
      // Clear error when user types
      if (errors[e.target.name]) {
        setErrors({ ...errors, [e.target.name]: "" });
      }
    };
  
    const validateForm = () => {
      const newErrors = {};
      if (!song.title.trim()) newErrors.title = "Title is required";
      if (!song.artist.trim()) newErrors.artist = "Artist is required";
      // Add more validations if needed (e.g., year should be a number)
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0; // Return true if no errors
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!validateForm()) return; // Stop if validation fails
      onSubmit(song);
      onClose();
    };
  
    return (
      <Overlay>
        <Modal>
          <h2>Add New Song</h2>
          <Field
            name="title"
            placeholder="Title"
            value={song.title}
            onChange={handleChange}
            required
          />
          {errors.title && <p style={{ color: "red", marginTop: -10, marginBottom: 10 , fontSize: "12px"}}>{errors.title}</p>}
          
          <Field
            name="artist"
            placeholder="Artist"
            value={song.artist}
            onChange={handleChange}
            required
          />
          {errors.artist && <p style={{ color: "red", marginTop: -10, marginBottom: 10 ,fontSize: "12px"}}>{errors.artist}</p>}
          
          <Field
            name="album"
            placeholder="Album"
            value={song.album}
            onChange={handleChange}
          />
          <Field
            name="year"
            placeholder="Year"
            value={song.year}
            onChange={handleChange}
          />
          
          <ButtonGroup>
            <Button variant="cancel" onClick={onClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Add</Button>
          </ButtonGroup>
        </Modal>
      </Overlay>
    );
  };
  
  export default AddSongForm;