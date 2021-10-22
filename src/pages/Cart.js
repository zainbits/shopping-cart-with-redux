import React from "react"
import {CartItem} from "../components/CartItem/CartItem"

export const Cart = () => {
    return (
        <div>
            <div>
                <CartItem />
            </div>
            <div>
                <h4>Cart Summary</h4>
                <span>TOTAL: (1 items)</span>
                <span>Rs. 700</span>
            </div>
            <div>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    )
}

