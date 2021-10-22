import React from "react"
import { Link } from "react-router-dom"
import './ItemCard.css'

export const ItemCard= ({ itemData }) => {
    return (
        <div className="block__card">
            <img src={itemData.image} alt=""/>

            <div>
                <p>{itemData.title}</p>
                <p>{itemData.description}</p>
                <p>Rs. {itemData.price}</p>
            </div>

            <div>
                <Link to="">
                    <button>View Item</button>
                </Link>
                <button>Add To Cart</button>
            </div>
        </div>
    )
}