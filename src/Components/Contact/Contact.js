import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { displayNoti } from "../../notification";
import { ContactContainerWrapper } from "./ContactStyled";
import { Section, SectionHeading, Reveal, Card, PrimaryButton } from "../Shared";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          displayNoti("Message Sent Successfully", "success", 2000);
          console.log(result.text);
        },
        (error) => {
          displayNoti("Something Went Wrong", "error", 2000);
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Section id="contact">
      <ContactContainerWrapper>
        <SectionHeading eyebrowNumber="07" eyebrow="Contact" title="Get In Touch" />

        <div className="contact-grid">
          <Reveal className="contact-map-col">
            <div id="google-map">
              <iframe
                title="Map of New Delhi, India"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48129412968!2d77.06889969035102!3d28.52728034389636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1644826171008!5m2!1sen!2sin"
                loading="lazy"
              />
            </div>
            <div className="contact-quick-links">
              <a href="mailto:ayushtayal1111@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/ayush-tayal-4a962b18a/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/Ayush-Tayal" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Card className="contact-form-card" id="contact-me">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-row-split">
                  <div className="form-field">
                    <label htmlFor="user_name">Name</label>
                    <input id="user_name" type="text" name="user_name" placeholder="Name" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="user_email">Email</label>
                    <input id="user_email" type="email" name="user_email" placeholder="Email" required />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" type="text" name="subject" placeholder="Subject" required />
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Type Your Message Here..." required />
                </div>

                <div id="send-message">
                  <PrimaryButton as="button" type="submit">
                    Send Message
                  </PrimaryButton>
                </div>
              </form>
            </Card>
          </Reveal>
        </div>
      </ContactContainerWrapper>
    </Section>
  );
};

export default Contact;
