import { createContext, useReducer } from "react";

export const CartCtx = createContext({
  items: [],
  addItems: (item) => {},
  removeItems: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "add_item") {
    const existingCartItemIdx = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedCartItems = [...state.items]; //copy old state

    if (existingCartItemIdx > -1) {
      const exsistingItem = state.items[existingCartItemIdx]; //exsisting item

      const updatedItem = {
        ...exsistingItem,
        quantity: exsistingItem.quantity + 1,
      };

      updatedCartItems[existingCartItemIdx] = updatedItem; //overwriting exsisting item in state
    } else {
      updatedCartItems.push({
        ...action.item,
        quantity: 1,
      });
    }
    return {
      //returning new state
      ...state,
      items: updatedCartItems,
    };
  }

  if (action.type === "remove_item") {
    const exsistingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const exsistingItem = state.items[exsistingItemIndex];

    const updatedCartItems = [...state.items];

    if (exsistingItem.quantity === 1) {
      updatedCartItems.splice(exsistingItemIndex, 1);
    } else {
      updatedCartItems[exsistingItemIndex] = {
        ...exsistingItem,
        quantity: exsistingItem.quantity - 1,
      };
    }

    return {
      ...state,
      items: updatedCartItems,
    };
  }
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  const addItems = (item) => {
    dispatchCartAction({
      type: "add_item",
      item,
    });
  };

  const removeItems = (item) => {
    dispatchCartAction({
      type: "remove_item",
      item,
    });
  };

  const cartCtx = {
    items: cart.items,
    addItems,
    removeItems,
  };

  return <CartCtx.Provider value={cartCtx}>{children}</CartCtx.Provider>;
}
