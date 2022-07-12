function Child(props) {
  console.log(props.text);
  return <>{props.children}</>;
}

function AllInOneFileDemo() {
  console.log("A");
  return (
    <>
      <p>Order of evaluation: pre-order traversal</p>
      <Child text={"B1"}>
        <Child text="C1"></Child>
        <Child text="C2"></Child>
      </Child>
      <Child text={"B2"}>
        <Child text="C3"></Child>
        <Child text="C4"></Child>
      </Child>
    </>
  );
}

export default AllInOneFileDemo;
