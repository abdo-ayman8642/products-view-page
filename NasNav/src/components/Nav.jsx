import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleCart } from "../redux/cartSlice";
import { BsSearch, BsCart3, BsPerson } from "react-icons/bs";
import Logo from "./logo";
import styles from "./Nav.module.css";
class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { cart, isOpen, toggleCart } = this.props;
    return (
      <nav className={styles.navbar}>
        <Logo />
        <div className={styles["navbar-links"]}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <div className={styles["navbar-links-logos"]}>
          <a href="#">
            <BsSearch />
          </a>
          <a className={styles["cart-icon"]} href="#" onClick={toggleCart}>
            <BsCart3 />
            <span className={styles["cart-num"]}>{cart}</span>
          </a>
          <a href="#">
            <BsPerson />
          </a>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart.length,
  isOpen: state.isOpen,
});

export default connect(mapStateToProps, { toggleCart })(Nav);
