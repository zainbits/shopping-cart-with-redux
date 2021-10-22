import * as actionTypes from './shopping-types'

const initialState = {
    items: [
        {
            id: 1,
            title: "title",
            description: "description",
            price: 202,
            image: "http://images1.wikia.nocookie.net/__cb20100202154502/fantendo/images/thumb/6/65/SmallMario.png/180px-SmallMario.png"
        },
        {
            id: 2,
            title: "title2",
            description: "description",
            price: 202,
            image: ""
        },
        {
            id: 3,
            title: "title3",
            description: "description",
            price: 202,
            image: ""
        }
    ], // {id, title, desc, price, img}
    cart: [], // {id, title, desc, price, img, qty}
    currentItem: null
}

const shopReducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            return {}
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.ADJUST_QTY:
            return {}
        case actionTypes.LOAD_CURRENT_ITEM:
            return {}
        default:
            return state
    }
}

export default shopReducer