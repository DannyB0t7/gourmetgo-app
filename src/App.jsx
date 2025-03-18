import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { MenuItems } from "../MenuItems";
import MealItems from "./components/MealItems";
import { ModalContextProvider } from "./store/ModalContext";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import { CartContextProvider } from "./store/CartContext";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 1rem;
`;

const StyleMealContainer = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1rem;
`;

function App() {
  const [userSearch, setUserSearch] = useState("");

  const filterHandler = (e) => {
    setUserSearch(() => e.target.value);
  };

  let filteredItemsArr;

  filteredItemsArr = MenuItems.filter((menuitem) => {
    return menuitem.name
      .toLowerCase()
      .includes(userSearch.toLowerCase().trim());
  });

  return (
    <CartContextProvider>
      <ModalContextProvider>
        <StyledContainer>
          <Header />
          <Filter onChangeFilter={filterHandler} userSearch={userSearch} />
          <StyleMealContainer>
            {filteredItemsArr.map((meal) => (
              <MealItems key={meal.id} meal={meal} />
            ))}
            {filteredItemsArr.length === 0 && "There is no meals found..."}
          </StyleMealContainer>
          <Cart />
        </StyledContainer>
      </ModalContextProvider>
    </CartContextProvider>
  );
}

export default App;
