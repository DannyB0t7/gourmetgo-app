import React, { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ModalCtx } from "../store/ModalContext";
import styled from "styled-components";

const StyledDialog = styled.dialog`
  background-color: #e4ddd4;
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  animation: fade-slide-up 0.3s ease-out forwards;
  margin: auto;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.55);
  }

  @keyframes fade-slide-up {
    from {
      opacity: 0;
      transform: translateY(4rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

function Modal({ children, isModal }) {
  const dialogRef = useRef();
  const { onCloseModal } = useContext(ModalCtx);

  useEffect(() => {
    const modal = dialogRef.current;

    const handleKeyDown = (e) => {
      dialogRef.current.close();
      onCloseModal();
    };

    if (isModal) {
      modal.showModal();
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") handleKeyDown(e);
      });
    } else {
      modal.close();
    }

    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") handleKeyDown(e);
      });
    };
  }, [isModal]);

  return createPortal(
    <StyledDialog ref={dialogRef}>{children}</StyledDialog>,
    document.getElementById("modal")
  );
}

export default Modal;
