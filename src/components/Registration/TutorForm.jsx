import React from "react";
import "./TutorForm.css";
import { BsBriefcase, BsCurrencyDollar } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

const TutorForm = () => {
  return (
    <section class="become-a-tutor">
      <div class="become-a-tutor-container">
        <form action="" class="become-a-tutor-form">
          <h2>Become a Tutor</h2>
          <p>
            Please fill out the form below and submit, and we will get back to
            you about tutoring with Learnhall within 24-48 business hours.
          </p>
          <div class="become-a-tutor-inputs">
            <div className="firstname-input">
              <label for="first-name">First Name*</label>
              <input type="text" name="first-name" id="first-name" required />
            </div>
            <div className="lastname-input">
              <label for="last-name">Last Name*</label>
              <input type="text" name="last-name" id="last-name" required />
            </div>
            <div className="email-input">
              <label for="email">Email* </label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="phone-input">
              <label for="phone">Phone*</label>
              <input type="tel" name="phone" id="phone" required />
            </div>
            <div className="zipcode-input">
              <label for="zip-code">Zip Code*</label>
              <input type="text" name="zip-code" id="zip-code" required />
            </div>
            <div className="location-input">
              <label for="location">Location*</label>
              <input type="text" name="location" id="location" required />
            </div>
          </div>
          <div class="become-a-tutor-textarea first-textarea">
            <label for="textarea">Tell us about yourself?*</label>
            <textarea name="textarea" id="textarea" required></textarea>
          </div>
          <div class="become-a-tutor-textarea">
            <label for="textarea">
              Tell us about your experience tutoring and what subjects you
              teach?*
            </label>
            <textarea name="textarea" id="textarea" required></textarea>
          </div>
          <div class="become-a-tutor-button">
            <button type="submit">Submit</button>
          </div>
        </form>
        <div class="become-a-tutor-contact">
          <h3>Why Join Us?</h3>
          <p>Make money while making a difference in students lives.</p>
          <div>
            <div class="img-box orange">
              <BsCurrencyDollar color="white" size="30px" />
            </div>
            <span>Earn a Steady Income</span>
            <div class="hr"></div>
          </div>
          <div>
            <div class="img-box blue">
              <BsBriefcase color="white" size="30px" />
            </div>
            <span>Work from Anywhere</span>
            <div class="hr"></div>
          </div>
          <div>
            <div class="img-box brown">
              <FaGraduationCap color="white" size="30px" />
            </div>
            <span>Help Students Succeed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorForm;
