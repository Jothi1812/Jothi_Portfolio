// src/components/Contact.js
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace the placeholders with your actual EmailJS service ID, template ID, and user ID (public key)
    emailjs.sendForm('service_ajabbnf', 'template_t83tfe6', form.current, 'BNGGUWldiSB0eZyT5')

      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" name="user_name" required placeholder="Your Name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="user_email" required placeholder="Your Email" />

        <label htmlFor="message">Message</label>
        <textarea name="message" required placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
