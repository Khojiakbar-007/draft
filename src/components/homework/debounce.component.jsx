import React from "react";
import { useState, useEffect } from "react";

const Debounce = () => {
  const [inputText, setInputText] = useState("");

  const [text, setText] = useState("");

  useEffect(() => {
    console.log("working");
    
    const timer = setTimeout(() => {
      setText(inputText);
      console.log(inputText);
    }, 1000);

    // return clearTimeout(timer);
  }, [inputText]);

  return (
    <>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
      />
      <p>{text}</p>
    </>
  );
};

export default Debounce;
