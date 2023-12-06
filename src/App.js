import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
