import React from "react";
import { Fragment } from "react";
import Hero from "../components/Header/Hero";
import ChooseUs from "../components/Body/Choose/ChooseUs";
import ServiceWork from "../components/Body/Services/ServiceWork";
import ServiceWorkMobile from "../components/Body/Services/ServiceWorkMobile";

const Home = () => {
  return (
    <Fragment>
      <header>
        <Hero />
      </header>
      <main>
        <ChooseUs />
        <ServiceWork />
        {/* <ServiceWorkMobile /> */}
      </main>
    </Fragment>
  );
};

export default Home;
