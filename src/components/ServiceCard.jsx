import { Link } from "react-router-dom";

function ServiceCard({ id, name, description, price }) {
  return (
    <Link to={`/services/${id}`} className="service-card">
      <span>0{id}</span>

      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>

      <span>{price} ↗</span>
    </Link>
  );
}

export default ServiceCard;