import React from "react";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import PizzaOrder from "./pages/PizzaOrder/PizzaOrder";
import OrderSummary from "./pages/OrderSummary/OrderSummary";
import "./App.css";

const App = () => {
  const [orderSummary, setOrderSummary] = useState({
    name: "",
    dough: "",
    ingredients: [],
    extra: 0,
    total: 0,
    count: 0,
  });

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <PizzaOrder setOrderSummary={setOrderSummary} />
        </Route>
        <Route path="/summary">
          <OrderSummary orderSummary={orderSummary} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
