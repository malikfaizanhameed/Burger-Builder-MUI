import React, { useState, useEffect } from "react";
import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Order/Checkout Summary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

const Checkout = (props) => {
  // debugger;
  const [state, setState] = useState({
    ingredients: null,
    price: 0,
  });

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    console.log("INGREDIENTS", ingredients, "PRICE ", price);
    setState({ ingredients: ingredients, totalPrice: price });
  }, []);

  const checkoutCancelHandler = () => {
    props.history.goBack();
  };

  const checkoutContinueHandler = () => {
    props.history.replace("/checkout/contact-data");
  };

  return (
    <div className={classes.Checkout}>
      CHECKOUT PAGE
      <CheckoutSummary
        ingredients={state.ingredients}
        cancel={checkoutCancelHandler}
        continue={checkoutContinueHandler}
      />
      <Route
        path={props.match.path + "/contact-data"}
        render={(props) => (
          <ContactData
            ingredients={state.ingredients}
            price={state.price}
            {...props}
          />
        )}
      />
    </div>
  );
};

export default Checkout;
