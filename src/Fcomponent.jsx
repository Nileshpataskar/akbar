import React, { useContext, useState } from "react";
import noteContext from "./context/noteContext";
// import One from './One'
// import Two from './Two'

const Fcomponent = () => {
  const [c, sc] = useState(1);
  const a = useContext(noteContext);

  const inc = () => {
    sc((prev) => prev + 1);
  };
  return (
    <div>
      Fcomponent
      <h1>count: {c}</h1>
      <button onClick={inc}>Click</button>
      <h1>useContext</h1>
      <p>Name is {a.name} and id is {a.id}</p>
      {/* <One/>
        <Two/> */}
    </div>
  );
};

export default Fcomponent;
