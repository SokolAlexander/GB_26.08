import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home } from "../Home";
import Chats from "../Chats";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Link to="/chats">CHATS</Link>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/chats/:chatId?" component={Chats}>
          {/* <Chats /> */}
        </Route>
        <Route>
          <h4>404</h4>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
