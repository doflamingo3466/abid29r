import { Link, useParams } from "react-router-dom";
import services from "../data/services";

function ServiceDetails() {
  const { id } = useParams();

  const service = services.find((item) => item.id === id);

  if (!service) {
    return (
      <section className="page">
        <h1>Service not found.</h1>
        <Link to="/services" className="btn">BACK TO SERVICES</Link>
      </section>
    );
  }

  return (
    <section className="page">
    

      <h1>{service.name}</h1>

      

      <h2 className="price">{service.price}</h2>

      <Link to="/services" className="btn">
        ← BACK TO SERVICES
      </Link>
    </section>
  );
}

export default ServiceDetails;