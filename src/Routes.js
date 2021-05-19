import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home, MyPage, SignIn, NotFound } from "@features";

export function Routes() {
  const zz = useSelector((state) => state);
  console.log("zz", zz);

  return (
    <Switch>
      <Route path={"/"} exact component={Home} />
      <Route path={"/mypage"} exact component={MyPage} />
      <Route path={"/signin"} exact component={SignIn} />
      <Route path={"/notfound"} exact component={NotFound} />
    </Switch>
  );
}
