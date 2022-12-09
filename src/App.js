import React, { createContext, useContext, useState } from "react";

const ColorContext = createContext("black");

export default function App() {
  const [theme, setTheme] = useState();
  return (
    <div>
      <ColorContext.Provider value={theme}>
        <h1 style={{ color: theme }}>Context Example</h1>
        <Form theme={theme} />
        <button onClick={() => setTheme("red")}>Change theme to red</button>
      </ColorContext.Provider>
    </div>
  );
}

const Form = () => {
  const colorChange = useContext(ColorContext);
  return (
    <div>
      <h1 style={{ color: colorChange }}>Form</h1>
      <Data theme={colorChange} />
    </div>
  );
};

const Data = () => {
  const colorChange = useContext(ColorContext);
  return (
    <div>
      <p style={{ color: colorChange }}>Some data over here.</p>
    </div>
  );
};
