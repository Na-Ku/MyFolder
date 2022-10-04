const List = () => {
  const fruits = ["jeruk", "matoa", "durian", "alpokat"];

  const fruit = fruits.map((f, ind) => <li key={ind}>{f}</li>);
  const fruit2 = fruits.filter((fl) => fl <= [3]);

  return (
    <>
      <ul>{fruit}</ul>
      <ul>{fruit2}</ul>
    </>
  );
};

export default List;
