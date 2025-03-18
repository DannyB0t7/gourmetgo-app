import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { CartCtx } from "../store/CartContext";

const StyledListCont = styled.div`
  background-color: #1d1a16;
  border-radius: 1rem;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;

  & > img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }

  & > div {
    padding: 0 0.5rem;
    padding-bottom: 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  & div.content > h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.75rem 0;
  }

  & div.content > p:nth-child(2) {
    display: inline-block;
    background-color: #312c1d;
    color: #ffc404;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 0.5rem 2rem;
    margin: 0;
    border-radius: 4px;
  }

  & div.content > p:last-child {
    margin: 1rem 0;
  }

  & > div > p {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

function MealItems({ meal }) {
  const { addItems } = useContext(CartCtx);

  return (
    <StyledListCont>
      <img src={meal.image} alt={meal.name} />
      <div>
        <div className="content">
          <h3>{meal.name}</h3>
          <p>${meal.price}</p>
          <p>{meal.description}</p>
        </div>
        <p>
          <Button onClick={() => addItems(meal)}>Add To Cart</Button>
        </p>
      </div>
    </StyledListCont>
  );
}

export default MealItems;
