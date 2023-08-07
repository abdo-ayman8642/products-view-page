// CartDropdown.js
import React, { Component } from "react";
import "./CartDropdown.css";
import { connect } from "react-redux";

class CartDropdown extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { cart, isOpen } = this.props;
    return (
      <div className={`container ${!isOpen ? "close" : ""}`}>
        <div className="shopping-cart">
          <div className="shopping-cart-header">
            <div className="shopping-cart-total"></div>
          </div>

          <ul className="shopping-cart-items">
            {cart.map((elem) => (
              <li className="clearfix">
                <img src={elem.image} alt={elem.name} />
                <span className="item-name">{elem.name}</span>
                <span className="item-price">${elem.price}</span>
                <span className="item-quantity">Quantity: {elem.quantity}</span>
              </li>
            ))}
          </ul>
          <span className="lighter-text">Sub Total:</span>
          <span className="main-color-text" style={{ float: "right" }}>
            $
            {cart
              .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
              .toFixed(2)}
          </span>
          <a href="#" className="button">
            Buy Now
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  isOpen: state.isOpen,
});

export default connect(mapStateToProps)(CartDropdown);
