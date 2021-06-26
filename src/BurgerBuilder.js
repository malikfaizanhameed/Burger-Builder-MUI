import React, { useState } from "react";
import Aux from "./Aux";
import Burger from "./Burger/Burger";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.4,
};

const BurgerBuilder = (props) => {
  const [state, setState] = useState({
    ingredients: {
      salad: 1,
      cheese: 1,
      meat: 1,
      bacon: 1,
    },
    totalPrice: 4,
  });

  return (
    <Aux>
      <div>Burger Builder Page</div>
      <Burger ingredients={state.ingredients} />
    </Aux>
  );
};

export default BurgerBuilder;
