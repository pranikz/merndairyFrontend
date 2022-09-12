export const cartReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "FETCH_API_DATA":
      return { ...state, products: action.payload };

    case "ADD_QTY":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_QTY":
      return {
        ...state,
        cart: state.cart.filter((prod) => prod.id !== action.payload.id),
      };

    case "UPDATE_QTY":
      return {
        ...state,
        cart: state.cart.filter((prod) =>
          prod.id === action.payload.id
            ? (prod.qty = action.payload.qty)
            : prod.qty
        ),
      };

    default:
      return state;
  }
};
