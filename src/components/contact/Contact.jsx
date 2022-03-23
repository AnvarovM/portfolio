import React from 'react';
import './contact.css';
import { MdOutlineMail } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const Contact = () => {
  return <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineMail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>anvarovmuxammadxuja2001@gmail.com</h5>
          <a href="mailto:anvarovmuxammadxuja2001@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        <article className="contact__option">
          <FaTelegramPlane className="contact__option-icon" />
          <h4>Telegram</h4>
          <h5>@anvarov2027</h5>
          <a href="https://t.me:/anvarov2027" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        <article className="contact__option">
          <BsInstagram className="contact__option-icon" />
          <h4>Instagram</h4>
          <h5>akzmsh</h5>
          <a href="https://instagram.com/akzmsh" target="_blank" rel="noreferrer">Send a message</a>
        </article>
      </div>

      <form>
      <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder="Your Message"></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>

      </form>
    </div>
  </section>;
};

export default Contact;
