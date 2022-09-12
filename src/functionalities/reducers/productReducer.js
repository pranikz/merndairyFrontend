export const productReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "COLOR_FILTER":
      const { color, checked } = action.payload;
      return {
        ...state,
        colorFilter: checked
          ? [...state.colorFilter, color]
          : state.colorFilter.filter((prod) => prod !== color),
      };
    case "GENDER_FILTER":
      const { gender, checked: genderChecked } = action.payload;
      return {
        ...state,
        genderFilter: genderChecked
          ? [...state.genderFilter, gender]
          : state.genderFilter.filter((prod) => prod !== gender),
      };

    case "PRICE_FILTER":
      const { range, checked: priceChecked } = action.payload;
      return {
        ...state,
        priceFilter: priceChecked
          ? [...state.priceFilter, range]
          : state.priceFilter.filter(
              (prod) => prod[0] !== range[0] && prod[1] !== range[1]
            ),
      };

    case "TYPE_FILTER":
      const { type, checked: typeChecked } = action.payload;
      return {
        ...state,
        typeFilter: typeChecked
          ? [...state.typeFilter, type]
          : state.typeFilter.filter((prod) => prod !== type),
      };

    case "CLEAR_FILTER":
      return {
        colorFilter: [],
        genderFilter: [],
        priceFilter: [],
        typeFilter: [],
      };

    case "FILTER_SEARCH":
      return {
        ...state,
        searchFilter: action.payload,
      };
    default:
      return state;
  }
};
