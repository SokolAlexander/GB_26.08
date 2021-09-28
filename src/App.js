import { useState, useCallback } from "react";
import { Provider } from "react-redux";
import { Routes } from "./components/Routes";
import "./App.scss";
import { ThemeContext } from "./utils/ThemeContext";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { SimpleText } from "./components/SimpleText";
import { Button } from "./components/Button";

function App() {
  // const [theme, setTheme] = useState("light");

  // const changeTheme = useCallback(() => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // }, []);
  const [name, setName] = useState("");

  const handleClick = useCallback(() => {
    setName(`${Math.random()}`);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* <ThemeContext.Provider value={{ theme, changeTheme }}> */}
          <Routes />
        {/* </ThemeContext.Provider> */}
      </PersistGate>
    </Provider>

    // <>
    //   <SimpleText name={name} />
    //   <Button onClick={handleClick}>Click</Button>
    // </>
  );
}

export default App;
