import React from "react";
import classes from "./Hero.module.css";
import girl from "../../assets/student.png";
import { FiThumbsUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col tablet:flex-row tablet:mt-24 tablet:px-5 ">
      <div className="mx-auto text-center tablet:text-left laptop:ml-20">
        <h1
          className={`${classes.firsttext} text-6xl m_small:mt-1 m_small:text-5xl mt-4 l_laptop:text-7xl`}
        >
          Tutoring
        </h1>
        <h2
          className={`${classes.secondtext} text-5xl tablet:text-5xl mt-1 m_small:mt-0 m_small:text-4xl l_laptop:text-7xl`}
        >
          done right
        </h2>
        <h3
          className={`${classes.thirdtext} text-gray-600 laptop:mt-1 laptop:text-2xl l_laptop:mt-2`}
        >
          Private In-Person & Online Tutoring
        </h3>
        <h1
          className={`text-justify tablet:w-80 laptop:w-96 l_laptop:w-98 pt-1 m_small:hidden tablet:inline-block ${classes.herotext}`}
        >
          If you want to learn an academic subject or study for an exam, we want
          to be the company you choose. Our tutors are bright and enthusiastic
          and seek to bring out the best of the individual learner’s potential
          in both academics as well as life.
        </h1>
        <button
          className={`mx-auto tablet:mt-2 tablet:ml-0 l_laptop:py-2 l_laptop:px-5 text-white m_small:hidden tablet:block bg-buttons py-1 px-4 rounded ${classes.button}`}
        >
          <Link to="/booksession">Book a Session</Link>
        </button>
      </div>
      <div className="mother">
        <div className="bg-cv_bg laptop:w-86 laptop:-mt-5 l_laptop:w-94 l_laptop:h-94 l_laptop:-ml-93 l_laptop:-mt-8 laptop:-ml-84 m_small:hidden tablet:block w-64 ml-37 h-80 rounded-tl-md absolute -z-10"></div>
        <div className="bg-g_bg tablet:ml-24  l_laptop:w-98 l_laptop:-ml-100 l_laptop:h-94 laptop:w-92 laptop:-ml-92 laptop:absolute tablet:w-72 m_small:w-72 m_medium:w-80 m_large:w-92 mt-2 m_large:mt-4 m_medium:mt-10 m_small:mt-1 w-96 mx-auto rounded-md">
          <div className="mt-2">
            <img
              src={girl}
              className="h-80 l_laptop:h-93 l_laptop:mt-5 border-b-4 mx-auto"
            />
            <div className="flex tablet:hidden absolute m_small:w-56 m_medium:ml-24 m_large:ml-37 m_large:w-52 m_medium:-mt-4 m_small:ml-16 bg-green-50 ml-44 rounded-tl-md rounded-bl-md -mt-3 p-1">
              <FiThumbsUp className="my-auto" />
              <h1 className="ml-1">100% Positive Feedback</h1>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-br-md tablet:hidden rounded-bl-md pb-3">
            <h1
              className={`px-4 py-2 text-justify m_small:mt-1 tb mt-2 pt-4 m_small:text-small ${classes.herotext}`}
            >
              If you want to learn an academic subject or study for an exam, we
              want to be the company you choose. Our tutors are bright and
              enthusiastic and seek to bring out the best of the individual
              learner’s potential in both academics as well as life.
            </h1>
            <button
              className={`mx-auto text-white bg-buttons py-1 px-4 rounded ${classes.button}`}
            >
              <Link to="/booksession">Book a Session</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
