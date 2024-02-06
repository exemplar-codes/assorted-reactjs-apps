// console.log(Child.name + " file run");

function Child({ count, setCount }) {
  console.log(Child.name + " funtion run");
  return (
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>
      {count}
    </button>
  );
}

export default Child;
