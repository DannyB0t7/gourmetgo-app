import React, { useContext } from "react";
import styled from "styled-components";
import { CartCtx } from "../store/CartContext";

const StyleIconCont = styled.div`
  position: relative;
`;
const StyledItemCount = styled.p`
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  top: -10px;
  right: -10px;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  text-align: center;
  background: #ffc404;
  color: black;
`;

function CartIcon() {
  const { items } = useContext(CartCtx);
  return (
    <StyleIconCont>
      <span className="material-symbols-outlined" style={{ fontSize: "2rem" }}>
        shopping_cart
      </span>
      <StyledItemCount>{items.length}</StyledItemCount>
    </StyleIconCont>
  );
}

export default CartIcon;
