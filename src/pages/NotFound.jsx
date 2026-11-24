import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page not-found">

      <h1>Page not found.</h1>

      <p className="description">
        The page you're looking for doesn't exist
      </p>

      <Link to="/" className="btn">
        GO HOME ↗
      </Link>
    </section>
  );
}

export default NotFound;