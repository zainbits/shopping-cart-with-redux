import React from "react"
import { connect } from "react-redux"
import { addToCart } from "../../Redux/Shopping/shopping-actions"
import "./ItemDetail.css"

const ItemDetail = ({ currentItem, addToCart }) => {
    return (
        <div className="block__item-detail">
            <img src={currentItem.image} alt="" />
            <div>
                <p>{currentItem.title}</p>
                <p>{currentItem.description}</p>
                <p>Rs. {currentItem.price}</p>

                <button onClick={()=>addToCart(currentItem.id)}>Add to cart</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentItem: state.shop.currentItem
})

const mapDispatchToProps = dispatch => ({
    addToCart: id => dispatch(addToCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail)