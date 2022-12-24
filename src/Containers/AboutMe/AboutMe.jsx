import React from "react";
import About from "../../Components/About/About";
import SectionTitle from "../../Components/sectionTitle/SectionTitle";

const AboutMe = () => {
  return (
    <section id="about_section" className="about_section">
      <div className="container">
        <SectionTitle title="About Me" descr="About Me" />
        <About />
      </div>
    </section>
  );
};

export default AboutMe;
