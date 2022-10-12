import React, { useState } from "react";

const Example = () => {
  const [name, setName] = useState("");
  const changeName = (e) => setName(e.target.value);
  return (
    <>
      <p>Teks : {name}</p>
      <input type="text" value={name} onChange={changeName} />
    </>
  );
};
export default Example;
