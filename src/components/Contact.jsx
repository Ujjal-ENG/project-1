import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/contact.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_epkoqgg', 'template_zoghpvi', form.current, 'bq2_9Z1Yil1VDN4PN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <iframe src="https://embed.lottiefiles.com/animation/81732"></iframe>
      <div className="contact" >
        <main>
          <h1>Contact Us</h1>
          <form action="post" onSubmit={sendEmail}>
            <div>
              <label htmlFor="name">Name: </label>
              <input type="text" required placeholder="Teach" />
            </div>

            <div>
              <label htmlFor="email">Email: </label>
              <input type="email" required placeholder="teach@gmail.com" />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea type="text" rows="10" required placeholder="Tell us About us. Don't Be Shy!!! " />
            </div>
            <button type="submit">Send</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Contact;
