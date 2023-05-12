import React from "react";
import classes from "./ChooseUs.module.css";
import { GiDiamondTrophy } from "react-icons/gi";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillStar, AiFillHeart } from "react-icons/ai";

const ChooseUs = () => {
  return (
    <div className="pt-5 bg-white mt-8 flex flex-col w-full h-full l_laptop:h-full laptop:mt-20 l_laptop:mt-52">
      <div className="mx-auto ">
        <h1
          className={`${classes.firsttext} m_small:text-xl m_small:font-bold text-2xl laptop:text-3xl l_laptop:text-4xl l_laptop:mt-24`}
        >
          Why should you choose us?
        </h1>
      </div>
      <div className="mx-auto">
        <h2 className="text-md m_small:mt-3 m_small:text-center text-center mt-2 px-2 mb-2 l_laptop:text-2xl l_laptop:px-28 laptop:text-lg laptop:px-20 tablet:px-14">
          We love tutoring and we value the student's process. Our tutors focus
          on each individual student and tailor the lessons around how he/she
          learns best.
        </h2>
      </div>
      {/* Reasons */}
      <div className="grid mb-10 grid-rows-2 grid-cols-2 l_laptop:mt-28 gap-4 l_laptop:grid-cols-4 laptop:grid-cols-4 laptop:gap-8 l_laptop:gap-20 mx-auto mt-5  tablet:grid-rows-2 tablet:grid-cols-2 m_small:grid-rows-1 m_small:grid-cols-1">
        {/* One */}
        <div className="w-52 h-56 l_laptop:w-56 l_laptop:h-60 flex flex-col shadow-sm rounded">
          <div className="mx-auto bg-dia_bg w-16 h-16 mt-2 rounded-full">
            <GiDiamondTrophy
              className="mx-auto mt-4 animate-pulse"
              size={35}
              color="white"
            />
          </div>

          <h1 className={`mx-auto font-semibold ${classes.well}`}>
            Well-Vetted Tutors
          </h1>
          <h2 className={`${classes.well} text-center mt-2 px-1`}>
            Our tutors are highly qualified, passionate, and well-educated at
            top universities.
          </h2>
        </div>
        {/* Two */}
        <div className="w-52 h-56 l_laptop:w-56 l_laptop:h-60  flex flex-col shadow-sm rounded">
          <div className="mx-auto bg-air_bg w-16 h-16 mt-2 rounded-full">
            <FaTelegramPlane
              className="mx-auto mt-4 animate-wiggle"
              size={35}
              color="white"
            />
          </div>

          <h1 className={`mx-auto font-semibold ${classes.well}`}>
            We Come to You
          </h1>
          <h2 className={`${classes.well} text-center mt-2 px-1`}>
            We meet at the pupil’s home or local library and we also offer
            online lessons.
          </h2>
        </div>
        {/* Three */}
        <div className="w-52 h-56 l_laptop:w-56 l_laptop:h-60  flex flex-col shadow-sm rounded">
          <div className="mx-auto bg-cv_bg w-16 h-16 mt-2 rounded-full">
            <AiFillStar
              className="mx-auto mt-4 animate-bounce"
              size={35}
              color="white"
            />
          </div>

          <h1 className={`mx-auto font-semibold ${classes.well}`}>
            Your Future
          </h1>
          <h2 className={`${classes.well} text-center mt-2 px-1`}>
            We share knowledge that can help in all areas of life, not just the
            subjects we are focusing on.
          </h2>
        </div>
        {/* Four */}
        <div className="w-52 h-56 l_laptop:w-56 l_laptop:h-60  flex flex-col shadow-sm rounded">
          <div className="mx-auto bg-love_bg w-16 h-16 mt-2 rounded-full">
            <AiFillHeart
              className="mx-auto mt-4 animate-beat"
              size={35}
              color="white"
            />
          </div>

          <h1 className={`mx-auto font-semibold ${classes.well}`}>
            We Love Effort
          </h1>
          <h2 className={`${classes.well} text-center mt-2 px-1`}>
            The ‘growth mindset’ is a lifelong asset. The result isn’t nearly as
            important as the effort.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
