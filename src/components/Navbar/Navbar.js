import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { searchItems } from "../../Redux/Shopping/shopping-actions";
import { connect } from "react-redux";

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
    console.log(searchText);
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
              src="https://image.flaticon.com/icons/svg/102/102276.svg"
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
  search: (title) => dispatch(searchItems(title)),
});

const mapStateToProps = (state) => ({
  cart: state.shop.cart,
  searchList: state.shop.searchItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
