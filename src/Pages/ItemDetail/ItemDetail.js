import React from "react"
import { connect } from "react-redux"
import { shopActions } from '../../Redux/Shopping/shopping-reducer'
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
    addToCart: id => dispatch(shopActions.addToCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail)