import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section1 from "./components/section1";
import Section2 from "./components/Section2";

function App() {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
