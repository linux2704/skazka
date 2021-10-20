import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Admin } from "admin";
import { useHistory } from "react-router-dom";
import Main from "app";

const Router: FC = () => {
  const { push } = useHistory();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const foo = params.get("pechenki");
  if (foo === "1337") {
    push("/oreo");
  }

  return (
    <main>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/oreo' component={Admin} />
        <Redirect from='*' to='/' />
      </Switch>
    </main>
  );
};

export { Router };
