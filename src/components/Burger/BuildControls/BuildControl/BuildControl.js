import React from "react";
import { Button } from "@material-ui/core";

const BuildControl = (props) => {
  return (
    <div>
      {props.label}
      <Button
        variant="contained"
        color="secondary"
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </Button>
      <Button variant="contained" color="primary" onClick={props.added}>
        More
      </Button>
    </div>
  );
};

export default BuildControl;
