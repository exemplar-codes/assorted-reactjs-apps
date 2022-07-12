import C from "./C";

function B(props) {
  console.log("B", props.i);
  return (
    <>
      <C i={2 * props.i - 1}  />
      <C i={2 * props.i}  />
    </>
  );
}

export default B;
