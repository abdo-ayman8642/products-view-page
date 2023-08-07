import React, { Component } from "react";
import styles from "./productReview.module.css";
import { AiOutlineHeart } from "react-icons/ai";
class ProductReview extends Component {
  render() {
    return (
      <>
        <div className={styles.cont}>
          <div className={styles.left}>
            <div className={styles.imgcont}>
              <div className={styles["side-image"]}>
                <img
                  src="https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg"
                  alt="Side Image 1"
                />
              </div>
              <div className={styles["side-image"]}>
                <img
                  src="https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg"
                  alt="Side Image 2"
                />
              </div>
              <div className={styles["side-image"]}>
                <img
                  src="https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg"
                  alt="Side Image 3"
                />
              </div>
              <div className={styles["side-image"]}>
                <img
                  src="https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg"
                  alt="Side Image 4"
                />
              </div>
              <div className={styles["central-image"]}>
                <img
                  src="https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg"
                  alt="Central Image"
                />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.nameproduct}>Name of product</p>
            <div>{"⭐".repeat(4)}</div>
            <p className={styles.price}>3000 EP</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              laborum quam et voluptas, ad debitis sequi facere in ex quo
              suscipit doloribus quos dignissimos dolores consectetur, nesciunt,
              qui consequuntur! Voluptatum.
            </p>
            <div className={styles.size}>
              <p>size</p>
              <span>2*3 M</span>
              <span>4*4 M</span>
              <span>3*4 M</span>
            </div>
            <div className={styles.color}>
              <p>color</p>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={styles.buttons}>
              <div className={styles.counter}>
                <div>1</div>
              </div>
              <div className={styles["buy-now"]}>buy now</div>
              <div>Add to wishlist</div>
              <div>video call</div>
              <div>share</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ProductReview;
