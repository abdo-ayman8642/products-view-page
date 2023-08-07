import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { connect } from "react-redux";
import { toggleCart } from "./redux/cartSlice";
import ProductReview from "./components/productReview";
import ProductSlider from "./components/Products";
import CartDropdown from "./components/CartDropdown";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isOpen, toggleCart } = this.props;
    return (
      <>
        {isOpen ? <div className="overlay" onClick={toggleCart}></div> : null}
        <Nav />
        <CartDropdown />
        <ProductReview />

        <ProductSlider />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
});

export default connect(mapStateToProps, { toggleCart })(App);
