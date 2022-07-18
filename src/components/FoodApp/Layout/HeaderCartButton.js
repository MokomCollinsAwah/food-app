import React from "react";
import classes from "./HeaderCartButton.module.css";

const HeaderCardButton = () => {
  return (
    <button className={classes.button}>
      <span></span>
      <span className={classes.cart}>Your Cart</span>
      <span className={classes.badge}>5</span>
    </button>
  );
};

export default HeaderCardButton;
