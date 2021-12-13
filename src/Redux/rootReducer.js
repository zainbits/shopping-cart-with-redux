import { configureStore } from '@reduxjs/toolkit'
import shopSlice from "./Shopping/shopping-reducer"

const store = configureStore({
    reducer: { shop: shopSlice.reducer },
})

export default store