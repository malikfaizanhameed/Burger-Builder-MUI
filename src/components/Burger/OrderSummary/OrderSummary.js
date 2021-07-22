import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import { Button } from "@material-ui/core";
import classes from "./OrderSummary.module.css";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious Burger with the following ingredients</p>
      {ingredientSummary}
      <p className={classes.buttons}>
        Total Price: <strong>${props.price.toFixed(2)}</strong>
        <Button variant="contained" color="secondary" onClick={props.cancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={props.continue}>
          Continue
        </Button>
      </p>
    </Aux>
  );
};

export default orderSummary;
