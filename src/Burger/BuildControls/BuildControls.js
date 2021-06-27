import React from "react";
import { Button } from "@material-ui/core";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      Total Price: <strong>${props.price.toFixed(2)}</strong>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <Button
        variant="contained"
        color="inherit"
        onClick={() => console.log("ORDERED!")}
        disabled={!props.purchasable}
      >
        ORDER NOW!
      </Button>
    </div>
  );
};

export default BuildControls;
