import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { connect } from "react-redux";
import { shopActions } from "../../Redux/Shopping/shopping-reducer";

const Navbar = ({ cart, search, searchList }) => {
  const [cartCount, setCartCount] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let count = 0;
    cart.forEach((it) => {
      count += it.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  const searchHandler = () => {
    search(searchText);
  };

  return (
    <div className="block__navbar">
      <Link className="elem__link" to="/">
        <h2 className="navbar__logo">Shopping Cart</h2>
      </Link>
      <div className="block__navbar--cart">
        <input
        className="navbar__search"
          type="text"
          placeholder="search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Link className="elem__link" to="/SearchResult">
          <button className="navbar__search__button" onClick={searchHandler}><i className="fa fa-search"></i></button>
        </Link>
        <Link className="elem__link" to="/cart">
          <div className="navbar__cart">
            <h1>Cart</h1>
            <img
              className="cart__image"
              src="https://pixabay.com/get/ge18737727b0422237370caf7835f7b4fa09a0bd089303d3cf0603fcb9b2f013777bb69e2cbaab8c15a997b2643b91421c0e55791137ea44e28fdbd198b5cbf7a44193a802b8ed977cb38debbbc21c484_640.png"
              alt="shopping cart"
            />
            <div className="cart__counter">{cartCount}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  search: (title) => dispatch(shopActions.searchItems(title)),
});

const mapStateToProps = (state) => ({
  cart: state.shop.cart,
  searchList: state.shop.searchItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
