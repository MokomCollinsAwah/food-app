import React from "react";
import classes from "./Meals.module.css";

const MealsSummary = () => {
  return (
    <div className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Curabitur quis dui tincidunt, congue justo malesuada, venenatis augue.
        Vestibulum a sapien orci. Cras lorem risus.
      </p>
      <p>
        Sed sodales semper tortor at feugiat. Nullam ullamcorper congue magna a
        consectetur. Donec fringilla non libero.
      </p>
    </div>
  );
};

export default MealsSummary;
