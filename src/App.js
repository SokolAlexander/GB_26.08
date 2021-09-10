import { useState, useCallback } from "react";
import { Provider } from "react-redux";
import { Routes } from "./components/Routes";
import "./App.scss";
import { ThemeContext } from "./utils/ThemeContext";
import { store } from "./store";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <Routes />
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
