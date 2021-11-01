import * as actionTypes from './shopping-types'
import API from "../../Api/backend"

export const fetchItems = () => dispatch => {
    return API.get("/get/all")
    .then(res => {
        const result = res.data.Items
        dispatch(setItems(result))
        return result
        
    })
    .catch(err => console.error(err))
}

export const setItems = items => ({
    type: actionTypes.SET_ITEMS,
    payload: items
})

export const addToCart = itemID => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const removeFromCart = itemID => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const adjustQty = (itemID, val) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: val
        }
    }
}

export const loadCurrentItem = item => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}

export const searchItems = itemTitle => {
    return {
        type: actionTypes.SEARCH_ITEMS,
        payload: {
            title: itemTitle
        }
    }
}