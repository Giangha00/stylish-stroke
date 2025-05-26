import "./contact.css";
import EmailContact from "../../../asset/mail-contact.svg";
import PhoneContact from "../../../asset/phone-contact.svg";
import LocationContact from "../../../asset/location-contact.svg";
import FacebookContact from "../../../asset/facebook-contact.svg";
import InstagramContact from "../../../asset/insta-contact.svg";
import TwitterContact from "../../../asset/twitter-contact.svg";
import Message from "../../../asset/message.svg";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__contact--us">
          <p className="contact__contact--us__title">Contact Us</p>
          <div className="contact__contact--us__content">
            <img
              src={EmailContact}
              alt="email"
              className="contact__contact--us__img"
            />
            <p className="contact__contact--us__text">team3@fpt-aptech.com</p>
          </div>
          <div className="contact__contact--us__content">
            <img
              src={PhoneContact}
              alt="phone"
              className="contact__contact--us__img"
            />
            <p className="contact__contact--us__text">+1 (234) 567-8910</p>
          </div>
          <div className="contact__contact--us__content">
            <img
              src={LocationContact}
              alt="location"
              className="contact__contact--us__img"
            />
            <p className="contact__contact--us__text">Fpt aptech</p>
          </div>
          <div className="contact__contact--us__content">
            <img
              src={InstagramContact}
              alt="instagram"
              className="contact__contact--us__other"
            />
            <img
              src={FacebookContact}
              alt="facebook"
              className="contact__contact--us__other"
            />
            <img
              src={TwitterContact}
              alt="twitter"
              className="contact__contact--us__other"
            />
          </div>
        </div>
        <div className="contact__feedback">
          <p className="contact__feedback__title">Feedback & Suggestions</p>
          <form className="contact__feedback__form">
            <div className="contact__feedback__line">
              <input
                type="text"
                placeholder="Your Name"
                className="contact__feedback__input"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="contact__feedback__input"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="contact__feedback__textarea"
            ></textarea>
            <button type="submit" className="contact__feedback__button">
              Send Message
              <img
                src={Message}
                alt="message"
                className="contact__message-icon"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
