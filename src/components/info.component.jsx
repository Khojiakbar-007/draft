import React, { useEffect, useState, useCallback, useMemo } from "react";

const Info = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Ism"
        onChange={(e) => {
          setName(e.target.value);
          console.log(name);
        }}
      />
      <Box />
    </div>
  );
};

const Box = ({ name }) => {
  let person = useMemo(() => {
    return {
      name,
      age: 15,
      isStudent: false,
    };
  }, [name]);

  let a = useCallback(
    () => ({
      name,
      age: 15,
      isStudent: false,
    }),
    [name]
  );

  useEffect(() => {
    console.log(person);
  }, [name]);
  return <h1>{name}</h1>;
};

export default Info;
