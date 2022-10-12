import React, { useState } from "react";

const Example = () => {
  const [name, setName] = useState("");
  const changeName = (e) => setName(e.target.value);

  

  return (
    <form>
      <input type="text" value={name} onChange={changeName} />
      <button type="submit">Go-Up</button>
    </form>
  );
};
export default Example;
