import { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { CiHeart } from "react-icons/ci";
import styles from "./ProductCard.module.css";

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { addToCart, id, name, image, price, rating } = this.props;
    return (
      <div className={styles["product-card"]}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo possimus
          ipsa cumque quia, culpa molestias voluptate consequatur debitis
          incidunt dicta tempora nulla animi maiores in consectetur id nesciunt
          laboriosam ipsum!
        </p>
        <p className={styles.price}>{price} EGP</p>
        <p>{"⭐".repeat(rating)} </p>
        <div className={styles.buttons}>
          <button
            className={styles.cart}
            onClick={() =>
              addToCart({
                id,
                name,
                image,
                price,
              })
            }
          >
            add to cart
          </button>
          <button className={styles.fav}>
            <CiHeart />
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {
  addToCart,
})(ProductCard);
