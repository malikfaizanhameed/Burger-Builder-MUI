import React, { useState } from "react";
import classes from "./ContactData.module.css";
import { Button } from "@material-ui/core";

const ContactData = (props) => {
  const [state, setState] = useState({
    name: "",
    number: "",
    email: "",
    house: "",
    street: "",
    paymentMethod: "",
    loading: false,
  });
  //   console.log(props);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? setState({
          [name]: checked,
        })
      : setState({
          [name]: value,
        });
  };

  const orderHandler = () => {
    console.log("Order Handler");
  };

  let form = (
    <form>
      <label>Name: </label>
      <input
        className={classes.Input}
        type="text"
        name="name"
        value={state.name}
        placeholder="Enter name"
        onChange={handleChange}
      />
      <label>Contact Number: </label>
      <input
        className={classes.Input}
        type="text"
        name="number"
        value={state.number}
        placeholder="Enter number"
        onChange={handleChange}
      />
      <label>Email: </label>
      <input
        className={classes.Input}
        type="email"
        name="email"
        placeholder="example@example.com"
        onChange={handleChange}
      />
      <label>House #: </label>
      <input
        className={classes.Input}
        type="text"
        name="house"
        value={state.house}
        placeholder="Enter house number"
        onChange={handleChange}
      />
      <label>Street: </label>
      <input
        className={classes.Input}
        type="text"
        name="street"
        placeholder="Enter street number"
        onChange={handleChange}
      />
      <label>Postal Code: </label>
      <input
        className={classes.Input}
        type="text"
        name="postalCode"
        placeholder="Enter postal code"
        onChange={handleChange}
      />
      <label>
        <input
          type="checkbox"
          name="paymentMethod"
          onChange={handleChange}
          checked={state.paymentMethod}
        />
        Payment via Cash?
      </label>
      <br />
      <Button variant="contained" color="primary" onClick={orderHandler}>
        ORDER
      </Button>
    </form>
  );

  if (!state.loading) {
    let form = "Loading!";
  }

  return <div>{form}</div>;
};

export default ContactData;
