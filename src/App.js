import React from "react";
//import logo from "./logo.svg";
import "./App.css";

//components
import wands from "./wands";
import WandsList from "./WandsList";

function App() {
  return (
    <div className="back-image">
      <div className="row">
        <div className="col-10">
          <p>
            <WandsList wands={wands} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
