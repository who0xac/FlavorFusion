import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "../../assets/css/contact.css"; // Make sure to create and link this CSS file

const ContactUs = () => {
  return (
    <>
      <Header />
      <main className="contact-main">
        <section className="contact-section">
          <h1>Contact Us</h1>
          <p>
            Have a question, feedback, or just want to get in touch? We'd love
            to hear from you! Fill out the form below or reach out to us
            directly via our contact details.
          </p>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Details Section */}
        <section className="contact-details">
          <h2>Our Contact Details</h2>
          <p>Email: support@flavorfusion.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Foodie Street, Culinary City, FC 45678</p>

          {/* Social Media Icons */}
          <div className="social-media">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
