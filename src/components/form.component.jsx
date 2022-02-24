import React from "react";
import { useState, useEffect, useRef } from "react";

const Form = () => {
  const search = useRef();

  const focusTextInput = () => {
    search.current.focus();
  }

  // const [apples, setApples] = useState(0);
  // useEffect(() => {
  //   console.log("Your apples: ", apples);
  // }, [apples]);


  return (
    <div>
      {/* <span>Apples: </span>
      <input
        type="number"
        value={apples}
        onChange={(e) => setApples(e.target.value)}
      /> */}

      <input type="text" ref={search} />
      <button onClick={focusTextInput}>button</button>
    </div>
  );
};

export default Form;
