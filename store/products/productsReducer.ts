import { ADD_PRODUCTS, SET_CURRENT_PAGE, SORT_BY_PRICE, ProductState, ProductsActionTypes } from "./types";

const initialState: ProductState = {
  products: [],
  pageSize: 3,
  currentPage: 1,
  searchQuery: "",
};

const productsReducer = (state = initialState, action: ProductsActionTypes): ProductState  => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { ...state, products: [...action.payload] };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case SORT_BY_PRICE:
      return { ...state, products: state.products.sort(action.sortSelect) };

    default:
      return state;
  }
};

export default productsReducer;
