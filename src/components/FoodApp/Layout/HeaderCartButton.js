import React, { useContext } from "react";

import CartContext from "../../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClickHandler}>
      <span></span>
      <span className={classes.cart}>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
