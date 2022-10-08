/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function LCF() {
  const [name, setName] = useState("");
  const [upDate, setUpDate] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => {
        setName(json.name);
      });
  }, []);

  function handleSubmit(ev) {
        ev.perventDefault();
        fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PUT",
            body: JSON.stringify({
                id: 1,
                name: name,
            }),
            headers: {
                "Content-type": "application/json: charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setUpDate(true);
            });
    }

  useEffect(() => {
    if (upDate) {
      alert("ok");
      setUpDate(false);
    }
  }, [upDate]);

  return (
    <div>
      <h3>Name : {name}</h3>
      <hr />
      <h4>Update Nama : </h4>
      <form onSubmit="{ (ev)=> handleSubmit(ev) }">
        <input type="text" placeholder="Chane Name" name="name" onChange={(ev) => setName(ev.target.value)} />
      </form>
    </div>
  );
}

export default LCF;
