import React from "react";
import "./SessionForm.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const SessionForm = () => {
  return (
    <section class="book-a-session">
      <div class="book-a-session-container">
        <form action="" class="book-a-session-form">
          <h2>Book a Session</h2>
          <p>
            Please fill out the form below and submit, and we will get back to
            you about your tutoring needs within 24 business hours.
          </p>
          <div class="book-a-session-inputs">
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
            <div className="studentgrade-input">
              <label for="student-grade">Student Grade*</label>
              <input
                type="text"
                name="student-grade"
                id="student-grade"
                required
              />
            </div>
            <div className="studentsubject-input">
              <label for="student-subject">Student Subject*</label>
              <input
                type="text"
                name="student-subject"
                id="student-subject"
                required
              />
            </div>
          </div>
          <div class="book-a-session-textarea">
            <label for="textarea">
              Why does the student need tutoring? (optional){" "}
            </label>
            <textarea name="textarea" id="textarea"></textarea>
          </div>
          <div class="book-a-session-button">
            <button type="submit">Submit</button>
          </div>
        </form>
        <div class="book-session-contact">
          <h3>Get in Touch</h3>
          <p>You can also contact us with any questions via phone or email.</p>
          <a href="tel:503-342-7214" class="phone-card">
            <BsFillTelephoneFill />
            <span>503-342-7214</span>
          </a>
          <a href="mailto:info@learnhall.com" class="email-card">
            <MdOutlineEmail />
            <span>info@learnhall.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SessionForm;
