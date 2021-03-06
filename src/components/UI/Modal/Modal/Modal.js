import React from "react";
import classes from "./Modal.module.css";
import Aux from "../../../../hoc/Aux/Aux";
import Backdrop from "../../Backdrop/Backdrop";

const modal = (props) => (
  <Aux>
    <Backdrop clicked={props.closeModal} show={props.show} />
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
      className={classes.Modal}
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;
