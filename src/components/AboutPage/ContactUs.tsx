import * as React from "react";
import './AboutPage.css';

const ContactUs: React.FC = () => {
  return(
    <div className="ContactUs">
      <h1>Contact Us</h1>
      <a href="tel:+381605553344">+381605553344</a>
      <a href="mailto:test@mail.com">test@mail.com</a>
    </div>
  );
}

export default ContactUs;
