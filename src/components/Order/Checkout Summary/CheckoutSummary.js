import React from "react";
import Burger from "../../Burger/Burger";
import { Button } from "@material-ui/core";

const CheckoutSummary = (props) => {
  console.log("PROPS!!!!", props.ingredients);

  if (props.ingredients !== null) {
    return (
      <div>
        BURGER SHOULD DISPLAY HERE
        <Burger ingredients={props.ingredients} />
        <Button color="secondary" variant="contained">
          Cancel
        </Button>
        <Button variant="contained" color="primary">
          Continue
        </Button>
      </div>
    );
  } else if (props.ingredients === null) {
    return null;
  }
};

export default CheckoutSummary;
