import { Link } from "react-router-dom";

export default function StartView() {
  return (
    <div className="wrapper">
      <h1>Quizzical</h1>
      <p>Challenge your random knowledge!</p>
      <Link to={"questions"} className="btn-start">Start quiz</Link>
    </div>
  );
}
