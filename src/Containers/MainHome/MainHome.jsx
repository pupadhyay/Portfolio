import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Blog from "../Blog/Blog";
import Contacts from "../Contacts/Contacts";
import HeaderPrimary from "../HeaderPrimary/HeaderPrimary";
import Hero from "../Hero/Hero";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";

const MainHome = () => {
  return (
    <>
      <HeaderPrimary />
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <Portfolio />
      <Blog />
      <Contacts />
    </>
  );
};

export default MainHome;
