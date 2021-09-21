import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home } from "../Home";
import Chats from "../Chats";
import { Profile, ThemedProfile } from "../Profile";
import { News } from "../News";
import { PrivateRoute } from "../PrivateRoute";
import { PublicRoute } from "../PublicRoute";

export const Routes = () => {
  const [authed, setAuthed] = useState(false);

  const handleLogin = () => {
    setAuthed(true);
  };

  const handleLogout = () => {
    setAuthed(false);
  }

  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/chats">CHATS</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
      </ul>
      <Switch>
        <PublicRoute path="/login" exact authed={authed}>
          <Home onLogin={handleLogin} />
        </PublicRoute>
        <PublicRoute path="/signup" exact authed={authed}>
          <Home onSignUp={handleLogin} />
        </PublicRoute>
        <PrivateRoute path="/profile" exact authed={authed}>
          <ThemedProfile theme={null} onLogout={handleLogout} />
        </PrivateRoute>
        <PrivateRoute
          path="/chats/:chatId?"
          component={Chats}
          authed={authed}
        />
        <Route path="/news" component={News} />
        <Route>
          <h4>404</h4>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
