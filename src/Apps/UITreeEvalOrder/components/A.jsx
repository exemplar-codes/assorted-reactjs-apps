import B from "./B";

function A() {
  console.log("A");
  return (
    <>
      <B i={1}  />
      <B i={2}  />
    </>
  );
}

export default A;
