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
      : "background: #ffd966;"}
`;

const EditSongForm = ({ song, onClose, onSubmit }) => {
  const [formState, setFormState] = useState(song);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formState);
    onClose();
  };

  return (
    <Overlay>
      <Modal>
        <h2>Edit Song</h2>
        <Field name="title" value={formState.title} onChange={handleChange} />
        <Field name="artist" value={formState.artist} onChange={handleChange} />
        <Field name="album" value={formState.album} onChange={handleChange} />
        <Field name="year" value={formState.year} onChange={handleChange} />
        <ButtonGroup>
          <Button variant="cancel" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </ButtonGroup>
      </Modal>
    </Overlay>
  );
};

export default EditSongForm;
