import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Game from "./Game";

const Routes = () => {
  return (
    <Switch>
      <Route path="/board" component={Game} />
      <Redirect to="/board" />
    </Switch>
  );
};

export default Routes;
