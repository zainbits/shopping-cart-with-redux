import React from "react"
import { Link } from "react-router-dom"
import './ItemCard.css'
import { connect } from "react-redux"
import { shopActions } from "../../Redux/Shopping/shopping-reducer"

const ItemCard= ({ itemData, addToCart, loadCurrentItem }) => {
    return (
        <div className="block__card">
            <img className="block__card--image" src={itemData.image} alt=""/>

            <div>
                <p>{itemData.title}</p>
                <p>{itemData.description}</p>
                <p>Rs. {itemData.price}</p>
            </div>

            <div>
                <Link to={`item/${itemData.id}`}>
                    <button onClick={()=>{loadCurrentItem(itemData)}}>View Item</button>
                </Link>
                <button onClick={()=>addToCart(itemData)}>Add To Cart</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => (
    {
        addToCart: id => dispatch(shopActions.addToCart(id)),
        loadCurrentItem: item => dispatch(shopActions.loadCurrentItem(item)) 
    }
)

export default connect(null, mapDispatchToProps)(ItemCard)