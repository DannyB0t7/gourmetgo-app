import { createContext, useState } from "react";

export const ModalCtx = createContext({
  modal: false,
  onOpenModal: () => {},
  onCloseModal: () => {},
});

export function ModalContextProvider({ children }) {
  const [modal, setModal] = useState(false);

  const openModalHandler = () => {
    setModal(true);
  };

  const closeModalHandler = () => {
    setModal(false);
  };

  const modalCtx = {
    modal,
    onOpenModal: openModalHandler,
    onCloseModal: closeModalHandler,
  };
  return <ModalCtx.Provider value={modalCtx}>{children}</ModalCtx.Provider>;
}
