const Filter = () => {
  const fruits = [4, 5, 2, 8, 1, 3, 7, 9, 6, 10];
  const fruit2 = fruits.filter((fl) => fl <= 10);

  return (
    <>
      <ul>{fruit2}</ul>
    </>
  );
};

export default Filter;
