import { createSlice } from "@reduxjs/toolkit"
// import data from '../../json/items.json'

const initialState = {
  items: [], // [{id, title, desc, price, image},...]
  cart: [], // [{id, title, desc, price, image, qty},...]
  currentItem: null,
  searchItems: [],
  loading: false
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
    addToCart(state, action) {
      const item = action.payload
      const inCart = state.cart.find( it => it.id === item.id)
      inCart ? inCart.qty = inCart.qty + 1 : state.cart.push({
          id: item.id,
          title: item.title,
          description: item.description,
          price: item.price,
          image: item.image,
          qty: 1
        })
      
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter(it => it.id !== action.payload)
    },
    adjustQty(state, action) {
      const item = state.cart.find(it => it.id === action.payload.id)
      item.qty = +action.payload.value
    },
    loadCurrentItem(state, action) {
      state.currentItem = action.payload
    },
    searchItems(state, action) {
      state.searchItems = state.items.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))
    },
  }
})

export const shopActions = shopSlice.actions
export default shopSlice
