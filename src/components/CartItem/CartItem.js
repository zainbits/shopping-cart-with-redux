import React, { useState } from "react";
import { connect } from "react-redux";
import {
  removeFromCart,
  adjustQty,
} from "../../Redux/Shopping/shopping-actions";
import "./CartItem.css";

const CartItem = ({ data, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(data.qty);

  const changeQuantity = (e) => {
    setInput(e.target.value);
    adjustQty(data.id, e.target.value);
  };

  return (
    <div className="block__cartitem">
      <img src={data.image} alt="" />
      <div>
        <p>{data.title}</p>
        <p>{data.description}</p>
        <p>Rs. {data.price}</p>
      </div>
      <div>
        <div>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={changeQuantity}
          />
        </div>
        <button onClick={() => removeFromCart(data.id)}><i className="fa fa-trash"></i></button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (id) => dispatch(removeFromCart(id)),
  adjustQty: (id, value) => dispatch(adjustQty(id, value)),
});

export default connect(null, mapDispatchToProps)(CartItem);
