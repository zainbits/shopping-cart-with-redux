import React, {useState, useEffect} from "react"
import CartItem from "../components/CartItem/CartItem"

import { connect } from "react-redux"

const Cart = ({cart}) => {
    
    const [totalPrice, setTotalPrice]= useState(0)
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        let items = 0
        let price = 0

        cart.forEach(it => {
            items += it.qty
            price += it.qty * it.price
            setTotalItems(items)
            setTotalPrice(price)
        });
    }, [cart, totalPrice, setTotalPrice, totalItems, setTotalItems])

    return (
        <div>
            <div>
                {cart.map(it => <CartItem key={it.id} data={it}/>)}
            </div>
            <div>
                <h4>Cart Summary</h4>
                <span>TOTAL: ({totalItems} items)</span>
                <span>Rs. {totalPrice}</span>
            </div>
            <div>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.shop.cart
})

export default connect(mapStateToProps)(Cart)