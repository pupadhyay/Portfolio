import React from "react";
import SectionTitle from "../../Components/sectionTitle/SectionTitle";
import Service from "../../Components/Service/Service";

const Services = () => {
  return (
    <section className="services_section">
      <div className="container">
        <SectionTitle
          title="Services"
          descr="I provide wide range of digital services"
        />
        <Service />
      </div>
    </section>
  );
};

export default Services;
