import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Assorted React apps</h1>
      <Link to="/apps">apps</Link>
    </div>
  );
}

export default Home;
