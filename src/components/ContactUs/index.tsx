import React from "react";
import styles from "./style.module.scss";

const ContactUs = () => {
  return (
    <section id={styles.contactUs}>
      <div className="container">
        <div className={styles.contactUs}>
          <div className={styles.leftSide}>
            <p>Contact us</p>
            <h1>Get in touch</h1>
            <span>
              We’d love to hear from you. Please fill out this form or shoot us
              an email.
            </span>

            <p className={styles.icon}>✉</p>
            <h4>Email</h4>
            <span>Our friendly team is here to help.</span>
            <p className={styles.link}>hi@ifixhere.com</p>

            <p className={styles.icon}>⚲</p>
            <h4>6 different states</h4>
            <span>Las Vegas, Chicago, New York, Seattle, California</span>
            <p className={styles.link}>See All Locations ↗</p>
          </div>
          <div className={styles.rightSide}>
            <form action="">
              <label htmlFor="name">Full name</label>
              <input type="text" name="" id="" placeholder="Full name" />

              <label htmlFor="name">Email</label>
              <input type="text" name="" id="" placeholder="you@company.com" />

              <label htmlFor="name">Phone number (Optional)</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="+1 (xxx) xxxx - xxx"
              />

              <label htmlFor="message">Message</label>
              <textarea name="" id=""></textarea>

              <div className={styles.checkbox}>
                <input type="checkbox" name="" id="" />
                <span>You agree to our friendly privacy policy.</span>
              </div>

              <button>Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
