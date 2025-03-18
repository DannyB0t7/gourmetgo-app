import React, { useContext } from "react";
import styled from "styled-components";
import { ModalCtx } from "../store/ModalContext";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffc404;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledImg = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  border-radius: 50%;
  border: 2px solid #ffc404;
`;

const StyledCartCont = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

function Header() {
  const { onOpenModal } = useContext(ModalCtx);

  return (
    <StyledContainer>
      <StyledLogoContainer>
        <StyledImg src="./logo.png" alt="logo" />
        <h2 style={{ margin: "2rem 0" }}>GourmetGo</h2>
      </StyledLogoContainer>
      <StyledCartCont onClick={onOpenModal}>
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "2rem" }}
        >
          shopping_cart
        </span>
        <p style={{ fontSize: "1.5rem" }}>Cart</p>
      </StyledCartCont>
    </StyledContainer>
  );
}

export default Header;
