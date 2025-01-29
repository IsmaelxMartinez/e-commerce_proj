import React from "react";
import "../styles/contact.css";

function Contact() {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, { draggable: true });
  });

  //funciotn to validate form inputs using regex
  function validateForm(event) {
    //stops form from submitting
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    //only number and spaces allowed
    var nameRegex = /^[A-Za-z\s]+$/;
    //standard email format
    var emailRegex = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //ensures message isnt empty
    var messageRegex = /^(?!\s*$).+/;

    //checks if the regex worked
    if (!nameRegex.test(name)) {
      alert("Please enter a valid name. Only letters and spaces allowed");
      return false;
    }

    if (!emailRegex.test(email)) {
      alert("Please enetr a valid email address");
      return false;
    }

    if (!messageRegex.test(message)) {
      alert("Please enter a message");
      return false;
    }

    alert("Form submitted successfully!");
  }

  return (
    <main>
      <div class="contact-container">
        <div class="section-title">Get in Touch</div>
        <form id="contact-form">
          <div class="input-field">
            <label for="name">Your Name</label>
          </div>

          <div class="input-field">
            <label for="email">Your Email</label>
          </div>

          <div class="input-field">
            <label for="message">Your Message</label>
          </div>

          <div class="input-field">
            <button type="submit" class="submit-btn">
              Send Message
            </button>
          </div>

          <div class="contact-info">
            <div>
              <i class="material-icons">phone</i>
              <p>(704)979-1230</p>
            </div>

            <div>
              <i class="material-icons">email</i>
              <p>contact@sportsplus.com</p>
            </div>

            <div>
              <i class="material-icons">location</i>
              <p>54 Sports Lane Rd, Charlotte, US</p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Contact;
