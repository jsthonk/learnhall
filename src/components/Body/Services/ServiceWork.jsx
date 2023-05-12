import React from "react";
import "./Service.css";
import ask from "../../../assets/ask.png";
import contact from "../../../assets/contact.png";
import finish from "../../../assets/finsih.png";
import { Controller, Scene } from "react-scrollmagic";

const ServiceWork = () => {
  return (
    <Controller>
      <Scene pin={true} duration={1} triggerHook={0}>
        <div className="service">
          <div className="service_title">
            <h1>Services</h1>
          </div>

          <div className="service_pages">
            <div>
              <h2 className="l_laptop:text-2xl l_laptop:font-bold">Step 1</h2>
              <img src={ask} className="w-44 " />
              <p className="l_laptop:text-3xl text-center">
                Inquire about our tutoring services by filling-out and
                submitting the “Book a Session” form.
              </p>
            </div>
            <div>
              <h2 className="l_laptop:text-2xl l_laptop:font-bold">Step 2</h2>
              <img src={contact} className="w-80" />
              <p className="l_laptop:text-3xl text-center">
                Within 24 hours an advisor will contact you to go over the
                student’s tutoring goals & needs.
              </p>
            </div>
            <div>
              <h2 className="l_laptop:text-2xl l_laptop:font-bold">Step 3</h2>
              <img src={finish} className="w-80" />
              <p className="l_laptop:text-3xl text-center">
                The advisor will find an ideal tutor match and set up a free
                session to ensure s/he is the right fit.
              </p>
            </div>
          </div>
        </div>
      </Scene>
    </Controller>
  );
};

export default ServiceWork;
