import React, { useState, useEffect } from "react";
import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Order/Checkout Summary/CheckoutSummary";

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

  return (
    <div>
      CHECKOUT PAGE
      <CheckoutSummary ingredients={state.ingredients} />
    </div>
  );
};

export default Checkout;
