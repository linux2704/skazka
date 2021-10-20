import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Admin } from "admin";
import Main from "app";

const Router: FC = () => {
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
