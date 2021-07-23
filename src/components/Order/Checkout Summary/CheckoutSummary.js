import React from "react";
import Burger from "../../Burger/Burger";
import { Button } from "@material-ui/core";

const CheckoutSummary = (props) => {
  console.log("PROPS!!!!", props.ingredients);

  if (props.ingredients !== null) {
    return (
      <div>
        <Burger ingredients={props.ingredients} />
        <Button color="secondary" variant="contained" onClick={props.cancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={props.continue}>
          Continue
        </Button>
      </div>
    );
  } else if (props.ingredients === null) {
    return null;
  }
};

export default CheckoutSummary;
