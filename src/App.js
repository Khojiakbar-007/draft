import React from "react";
import { useEffect } from "react";

import Form from "./components/form.component";
import Info from "./components/info.component";
import Counter from "./components/counter.component";

import Debounce from "./components/homework/debounce.component";
import Nimadir from "./components/dars-2/nimadir.component";

import "./App.css";

function App() {
  // useEffect() {
  // }
  // setTimeout(function () {
  //   console.log("2 seconds");
  // }, 2000);
  // setTimeout(function () {
  //   console.log("4 seconds");
  // }, 4000);
  // setTimeout(function () {
  //   console.log("6 seconds");
  // }, 6000);

  return (
    <div className="App">
      Something
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <Info /> */}
      {/* <Debounce /> */}
      <Nimadir />
    </div>
  );
} 

export default App;
