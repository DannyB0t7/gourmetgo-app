import React, { useContext } from "react";
import { CartCtx } from "../store/CartContext";
import styled from "styled-components";

const StyledCartItemCont = styled.div`
  margin: 1rem 0;

  & > p {
    display: none;
    margin-top: 0.5rem;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  & > div > div {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  & > div > div > img {
    height: 70px;
    width: 70px;
    border-radius: 10px;
  }

  & > div > p {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  & button {
    cursor: pointer;
    font-size: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: none;
    background-color: #312c1d;
    color: #ffc404;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 640px) {
    & > div > div > p {
      display: none;
    }

    & > p {
      display: block;
      margin-top: 0.5rem;
    }
  }
`;

function CartItem({ item }) {
  const { addItems, removeItems } = useContext(CartCtx);

  return (
    <StyledCartItemCont>
      <div>
        <div>
          <img src={item.image} alt={item.name} />
          <p>
            {item.name} - <span>{item.quantity}</span> x{" "}
            <span>${item.price}</span>
          </p>
        </div>
        <p>
          <button onClick={() => removeItems(item)}>-</button>
          <span style={{ minWidth: "30px", textAlign: "center" }}>
            {item.quantity}
          </span>
          <button onClick={() => addItems(item)}>+</button>
        </p>
      </div>
      <p>
        {item.name} - <span>2</span> x <span>${item.price}</span>
      </p>
    </StyledCartItemCont>
  );
}

export default CartItem;
