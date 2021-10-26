import * as actionTypes from "./shopping-types";
import data from '../../json/items.json'

const initialState = {
  items: data.items, // [{id, title, desc, price, img},...]
  cart: [], // [{id, title, desc, price, img, qty},...]
  currentItem: null,
  searchItems: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.items.find((it) => it.id === action.payload.id);
      const inCart = state.cart.find((it) =>
        it.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map(it =>
              it.id === action.payload.id ? { ...it, qty: it.qty + 1 } : it
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
          ...state,
          cart: state.cart.filter(it => it.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
          ...state,
          cart: state.cart.map(it => it.id === action.payload.id ? {...it, qty: +action.payload.qty} : it)
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
          ...state,
          currentItem: action.payload
      };
    case actionTypes.SEARCH_ITEMS:
      return {
        ...state,
        searchItems: state.items.filter(item => item.title.includes(action.payload.title))
      }
    default:
      return state;
  }
};

export default shopReducer;
