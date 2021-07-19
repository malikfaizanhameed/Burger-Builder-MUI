import React, { useState } from "react";
import Aux from "../../hoc/Aux/Aux";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Modal from "../../components/UI/Modal/Modal/Modal";
import OderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.4,
};

const BurgerBuilder = (props) => {
  const [state, setState] = useState({
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  });

  const addIngredientHandler = (type) => {
    const oldCount = state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = {
      ...state.ingredients,
    };
    updatedIngredients[type] = newCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });

    if (updatePurchaseState(updatedIngredients)) {
      setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice,
        purchasable: true,
      });
    } else {
      setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice,
        purchasable: false,
      });
    }
  };

  const removeIngredientHandler = (type) => {
    const oldCount = state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount - 1;
    const updatedIngredients = {
      ...state.ingredients,
    };
    updatedIngredients[type] = newCount;
    const priceReduction = INGREDIENT_PRICES[type];
    const oldPrice = state.totalPrice;
    const newPrice = oldPrice - priceReduction;

    if (updatePurchaseState(updatedIngredients)) {
      setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice,
        purchasable: true,
      });
    } else {
      setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice,
        purchasable: false,
      });
    }
  };

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    if (sum > 0) {
      return true;
    }
  };

  const clearIngredientsHandler = () => {
    let clearedIngredients = {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    };
    setState({
      ...state,
      ingredients: clearedIngredients,
      totalPrice: 4,
      purchasable: false,
    });
  };

  const orderHandler = () => {
    console.log("ORDERED!");
    setState({
      ...state,
      purchasing: true,
    });
  };

  const orderCancelHandler = () => {
    setState({
      ...state,
      purchasing: false,
    });
  };

  const orderContinueHandler = (props) => {
    console.log(
      "This is where the order gets sent to the DB and rerouted to home page"
    );
    console.log(state.ingredients, state.totalPrice);

    const queryParams = [];
    for (let i in state.ingredients) {
      queryParams.push(i + "=" + state.ingredients[i]);
    }
    queryParams.push("price=" + state.totalPrice);
    const queryString = queryParams.join("&");
    console.log("PROPS", props.history);
    // props.history.push({
    //   pathname: "/checkout",
    //   search: "?" + queryString,
    // });
  };

  const disabledInfo = {
    ...state.ingredients,
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0; // creating an array with true/false for each ingredient
  }

  let orderSummary = (
    <OderSummary
      ingredients={state.ingredients}
      price={state.totalPrice}
      cancel={orderCancelHandler}
      continue={orderContinueHandler}
    />
  );

  return (
    <Aux>
      <Modal show={state.purchasing} closeModal={orderCancelHandler}>
        {orderSummary}
      </Modal>
      <Burger ingredients={state.ingredients} />
      <BuildControls
        price={state.totalPrice}
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        purchasable={state.purchasable}
        disabled={disabledInfo}
        clear={clearIngredientsHandler}
        ordered={orderHandler}
        cancelOrder={orderCancelHandler}
      />
    </Aux>
  );
};

export default BurgerBuilder;
