import { Fragment } from "react";
import "./Service.css";
import ask from "../../../assets/ask.png";
import contact from "../../../assets/contact.png";
import girl from "../../../assets/Girl with notebook 2 1.png";
import finish from "../../../assets/finsih.png";
import { Controller, Scene } from "react-scrollmagic";

const ServiceWork = () => {
  return (
    <Fragment>
      <Controller>
        <Scene pin={true} duration={1} triggerHook={1}>
          {/* Tablet - Large Laptop */}
          <div className="service max-tablet:hidden">
            <div className="service_title">
              <div className="flex flex-col px-2">
                <h1 className="mx-auto text-4xl laptop:text-3xl tablet:text-2xl">
                  How our service works
                </h1>
                <h2 className="mx-auto text-lg mb-2 laptop:text-sm tablet:text-sm px-2 tablet:text-center">
                  Follow the three steps below to book your first session and
                  get started with a tutor.
                </h2>
                <div className="bg-cv_bg pt-2 rounded-lg ">
                  <img src={girl} className="laptop:w-96" />
                </div>
              </div>
            </div>
            <div className="service_pages">
              <div>
                <h2 className="l_laptop:text-2xl l_laptop:font-bold mb-5">
                  Step 1
                </h2>
                <img src={ask} className="w-44 " />
                <p className="l_laptop:text-3xl text-center l_laptop:mt-10">
                  Inquire about our tutoring services by filling-out and
                  submitting the “Book a Session” form.
                </p>
              </div>
              <div>
                <h2 className="l_laptop:text-2xl l_laptop:font-bold mb-5">
                  Step 2
                </h2>
                <img src={contact} className="w-80" />
                <p className="l_laptop:text-3xl text-center l_laptop:mt-10">
                  Within 24 hours an advisor will contact you to go over the
                  student’s tutoring goals & needs.
                </p>
              </div>
              <div>
                <h2 className="l_laptop:text-2xl l_laptop:font-bold mb-5">
                  Step 3
                </h2>
                <img src={finish} className="w-80" />
                <p className="l_laptop:text-3xl text-center l_laptop:mt-10">
                  The advisor will find an ideal tutor match and set up a free
                  session to ensure s/he is the right fit.
                </p>
              </div>
            </div>
            <div className="tablet:hidden">Testing</div>
          </div>
        </Scene>
      </Controller>
    </Fragment>
  );
};

export default ServiceWork;
