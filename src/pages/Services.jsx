import services from "../data/services";
import ServiceCard from "../components/ServiceCard";


function Services() {
  return (
    <section className="page">
    

      <h1>Our Services.</h1>

      <div className="service-list">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;