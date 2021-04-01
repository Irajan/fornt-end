import Home from "./pages/Home";
import NavBar from './components/NavBar'
import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Home/>
    </React.Fragment>
  )
}

export default App;
