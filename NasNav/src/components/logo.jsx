import React, { Component } from "react";
import styles from "./logo.module.css";
import menu from "../assets/menu.png";
class Logo extends Component {
  render() {
    return (
      <>
        <img
          src={menu}
          style={{
            width: "30px",
            height: "30px",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        />
        <div className={styles.logoCont}>
          <h1>
            Abdou mostafa <span>tm</span>
          </h1>
        </div>
      </>
    );
  }
}
export default Logo;
