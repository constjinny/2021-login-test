import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About, SignUp, NotFound } from "@features";

export function Routes() {
  return (
    <Switch>
      <Route path={"/"} exact component={Home} />
      <Route path={"/about"} exact component={About} />
      <Route path={"/signup"} exact component={SignUp} />
      <Route path={"/notfound"} exact component={NotFound} />
    </Switch>
  );
}
