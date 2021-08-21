import React from "react";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/NavBar";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Body />
    </>
  );
};

export default App;
