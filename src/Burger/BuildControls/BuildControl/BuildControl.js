import React from "react";
import { Button } from "@material-ui/core";

const BuildControl = (props) => {
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={props.removed}>
        Less
      </Button>
      <Button variant="contained" color="primary" onClick={props.added}>
        More
      </Button>
    </div>
  );
};

export default BuildControl;
