import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.id}`} className="service-card">
      <span>0{service.id}</span>

      <div>
        <h2>{service.name}</h2>
        <p>{service.description}</p>
      </div>

      <span>VIEW --- </span>
    </Link>
  );
}

export default ServiceCard;