import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CustomLibraryComponent } from "my-library/lib/custom-library-component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CustomLibraryComponent message="this is my new component"></CustomLibraryComponent>
      </header>
    </div>
  );
}

export default App;
