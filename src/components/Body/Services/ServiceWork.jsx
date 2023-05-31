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
          <div className="flex">
            <div className="flex laptop:h-[100vh] laptop:w-[50%] justify-center items-center sticky top-0 ">
              <div className="flex flex-col px-2 max-laptop:hidden">
                <h1 className="mx-auto text-4xl laptop:text-3xl tablet:text-2xl">
                  How our service works
                </h1>
                <h2 className="mx-auto text-lg mb-2 laptop:text-sm tablet:text-sm px-2 tablet:text-center">
                  Follow the three steps below to book your first session and
                  get started with a tutor.
                </h2>
                <div className="bg-cv_bg pt-2 rounded-lg max-laptop:hidden">
                  <img src={girl} className="laptop:w-96" />
                </div>
              </div>
            </div>
            {/* Mobile */}
            <div className="mx-auto flex flex-col laptop:hidden pt-2">
              <h1 className="mx-auto font-bold text-2xl laptop:text-3xl tablet:text-2xl">
                How our service works
              </h1>
              <h2 className="mx-auto m_small:text-small m_small:text-center m_medium:text-sm m_medium:text-center m_large:text-sm m_large:text-center text-lg mb-2 px-2">
                Follow the three steps below to book your first session and get
                started with a tutor.
              </h2>
              <div className="mx-auto">
                <div className="flex flex-row gap-4 mt-10 mb-10 px-5">
                  <div className="tablet:w-16 tablet:h-16 m_small:h-10 m_small:w-10 m_large:w-10 m_large:h-10 m_medium:h-10 m_medium:w-10 bg-cv_bg flex rounded-full my-auto">
                    <p className="mx-auto my-auto tablet:text-3xl m_large:text-xl text-white font-bold animate-bounce">
                      1
                    </p>
                  </div>
                  <div className="my-auto bg-white tablet:w-98 m_large:w-80 m_medium:w-72 m_small:w-52 flex flex-col px-4 py-2 rounded-md">
                    <h1 className="tablet:text-2xl m_large:text-xl font-bold">
                      Step One
                    </h1>
                    <p className="tablet:text-xl m_large:text-sm mt-2 m_small:text-small">
                      Inquire about our tutoring services by filling-out and
                      submitting the “Book a Session” form.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 mt-10 mb-10 px-5">
                  <div className="tablet:w-16 tablet:h-16 m_small:h-10 m_small:w-10 m_large:w-10 m_large:h-10 m_medium:h-10 m_medium:w-10 bg-air_bg flex rounded-full my-auto">
                    <p className="mx-auto my-auto tablet:text-3xl m_large:text-xl text-white font-bold animate-wiggle">
                      2
                    </p>
                  </div>
                  <div className="my-auto bg-white tablet:w-98 m_small:w-52 m_large:w-80 m_medium:w-72 flex flex-col px-4 py-2 rounded-md">
                    <h1 className="tablet:text-2xl m_large:text-xl font-bold">
                      Step Two
                    </h1>
                    <p className="tablet:text-xl m_large:text-sm mt-2 m_small:text-small">
                      Within 24 hours an advisor will contact you to go over the
                      student’s tutoring goals & needs.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 mt-10 mb-10 px-5">
                  <div className="tablet:w-16 tablet:h-16 m_small:h-10 m_small:w-10 m_large:w-10 m_large:h-10 m_medium:h-10 m_medium:w-10 bg-dia_bg flex rounded-full my-auto">
                    <p className="mx-auto my-auto tablet:text-3xl m_large:text-xl text-white font-bold animate-beat">
                      3
                    </p>
                  </div>
                  <div className="my-auto bg-white tablet:w-98 m_large:w-80 m_medium:w-72 m_small:w-52 flex flex-col px-4 py-2 rounded-md">
                    <h1 className="tablet:text-2xl m_large:text-xl font-bold">
                      Step Three
                    </h1>
                    <p className="tablet:text-xl m_large:text-sm mt-2 m_small:text-small">
                      The advisor will find an ideal tutor match and set up a
                      free session to ensure s/he is the right fit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop and Larger Laptops */}
            <div className="service_pages max-laptop:hidden">
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
          </div>
        </Scene>
      </Controller>
    </Fragment>
  );
};

export default ServiceWork;
