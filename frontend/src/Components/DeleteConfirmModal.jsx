/** @jsxImportSource @emotion/react */
import React from "react";
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
  width: 320px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const Message = styled.p`
  margin-bottom: 20px;
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
      : "background: #ff6b6b; color: white;"}
`;

const DeleteConfirmModal = ({ song, onCancel, onConfirm }) => {
  return (
    <Overlay>
      <Modal>
        <h3>Confirm Delete</h3>
        <Message>
          Are you sure you want to delete <strong>{song.title}</strong>?
        </Message>
        <ButtonGroup>
          <Button variant="cancel" onClick={onCancel}>Cancel</Button>
          <Button onClick={() => onConfirm(song.id)}>Delete</Button>
        </ButtonGroup>
      </Modal>
    </Overlay>
  );
};

export default DeleteConfirmModal;
