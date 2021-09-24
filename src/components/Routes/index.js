import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home } from "../Home";
import Chats from "../Chats";
import { Profile, ThemedProfile } from "../Profile";
import { News } from "../News";
import { PrivateRoute } from "../PrivateRoute";
import { PublicRoute } from "../PublicRoute";
import { login, signUp, signOut, auth } from '../../services/firebase';
import { onAuthStateChanged } from "firebase/auth";

export const Routes = () => {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = async (email, pass) => {
    try {
      await login(email, pass);
      // setAuthed(true);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignUp = async (email, pass) => {
    try {
      await signUp(email, pass);
      // setAuthed(true);
    } catch (e) {
      console.log(e);
    }
  }

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (e) {
      console.log(e);
    }
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
          <Home onSignUp={handleSignUp} />
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
