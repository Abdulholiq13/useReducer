/* eslint-disable no-fallthrough */
/* eslint-disable no-case-declarations */
export const initialState = {
  son: 9,
  wishlist: [],
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, son: state.son + action.payload };
    case "TOGGLE_WISHLIST":
      let index = state.wishlist.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        return { ...state, wishlist: [...state.wishlist, action.payload] };
      } else {
        return {
          ...state,
          wishlis: state.wishlist.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      }
    case "TOGGLE-CART":
      let cartIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartIndex < 0) {
        return { ...state, cart: [...state.cart, action.payload] };
      } else {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      }
    default:
      return state;
  }
};
