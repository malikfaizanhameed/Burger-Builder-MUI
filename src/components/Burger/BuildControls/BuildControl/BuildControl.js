import React from "react";
import "./BuildControl.css";
import { Button } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";

const BuildControl = (props) => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <div className="Buttons">
        <div className="Less">
          <Button
            variant="contained"
            color="secondary"
            onClick={props.removed}
            disabled={props.disabled}
          >
            Less
          </Button>
        </div>
        <div className="More">
          <Button variant="contained" color="primary" onClick={props.added}>
            More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuildControl;
