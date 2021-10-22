import React from 'react'

export const CartItem = () => {
    return ( <div>
        <img src="" alt="" />
        <div>
            <p>Title</p>
            <p>Description</p>
            <p>Rs. 700</p>
        </div>
        <div>
            <div>
                <label htmlFor="qty">Qty</label>
                <input min="1" type="number" id="qty" name="qty" value="1" />
            </div>
            <button>DeleteItem</button>
        </div>
    </div>)
}