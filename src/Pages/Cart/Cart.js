import React, {useState, useEffect} from "react"
import CartItem from "../../components/CartItem/CartItem"
import "./Cart.css"

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

        if (cart.length === 0) {
            setTotalItems(0)
            setTotalPrice(0)
        }
    }, [cart, totalPrice, totalItems])

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