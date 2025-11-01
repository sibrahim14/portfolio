import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope,  } from "react-icons/fa";


export default function Contact() {
  return (
    <section id="contact" className="contact-section tracking-in-expand-fwd-bottom">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-text">
        Have a project or just want to say hi? Let’s connect!
      </p>

      {/* ==== Contact Icons ==== */}
      <div className="contact-icons">
        <a href="mailto:sibrahim3092@gmail.com" className="contact-icon" title="Email">
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/sibrahim14"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          title="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        
      </div>

      {/* ==== Contact Form ==== */}
      <form
        className="contact-form"
        action="https://formspree.io/f/mjkpppep"  // You can replace this with your backend or Formspree ID
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </section>
  );
}
