import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImg from "../assets/meals.jpg";
import HeaderCardButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <HeaderCardButton onClickHandler={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
