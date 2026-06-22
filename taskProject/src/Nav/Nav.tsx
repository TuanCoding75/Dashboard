import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <Link to={"/tasks"} aria-label="tasks">
        Tâches
      </Link>
      <Link to={"/tasks"} aria-label="tasks">
        Creation Client
      </Link>
    </>
  );
}
