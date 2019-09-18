import React from "react";
//import logo from "./logo.svg";
import "./App.css";

//components
import wands from "./wands";
import WandsList from "./WandsList";

function App() {
  return (
    <div className="container-fluid back-image">
      <h1 className="style">Ollivander's Wand Shop!</h1>
      <p>
        <WandsList wands={wands} />
      </p>
    </div>
  );
}

export default App;
