import React, { useContext } from "react";
import Modal from "../UI/Modal";
import { ModalCtx } from "../store/ModalContext";
import Button from "../UI/Button";
import CartItem from "./CartItem";
import { CartCtx } from "../store/CartContext";

function Cart() {
  const { modal, onCloseModal } = useContext(ModalCtx);
  const { items } = useContext(CartCtx);

  const TotalCost = items
    .reduce((price, item) => (price += +item.price * item.quantity), 0)
    .toFixed(2);

  return (
    <Modal isModal={modal}>
      <div>
        <h2>Your Cart</h2>
        {items.length === 0 && (
          <p style={{ margin: "2rem 0" }}>No items in cart...</p>
        )}

        {items.length > 0 && (
          <div style={{ margin: "2rem 0" }}>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        )}

        {items.length > 0 && (
          <p
            style={{
              marginTop: "2rem",
              marginLeft: "auto",
              width: "fit-content",
            }}
          >
            Total: $<span>{TotalCost}</span>
          </p>
        )}

        <Button onClick={onCloseModal}>Close</Button>
      </div>
    </Modal>
  );
}

export default Cart;
