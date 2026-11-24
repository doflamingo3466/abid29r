import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">

      <h1>We build digital things that matter.</h1>



      <Link to="/services" className="btn">
        EXPLORE SERVICES 
      </Link>

      <div className="hero-bottom">
        <span>DESIGN / DEVELOPMENT / IDEAS</span>
        <span>01 — 04</span>
      </div>
    </section>
  );
}

export default Home;