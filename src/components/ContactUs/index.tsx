import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import emailIcon from "@/assets/images/icons/emailIcon.svg";
import locationIcon from "@/assets/images/icons/locationIcon.svg";

const ContactUs = () => {
  return (
    <section>
      <div id={styles.contactUsContainer} className="container">
        <div id={styles.contactUs}>
          <div className={styles.leftSide}>
            <div className={styles.header}>
              <p>Contact us</p>
              <h2>Get in touch</h2>
              <span>
                We’d love to hear from you. Please fill out this form or shoot
                us an email.
              </span>
            </div>

            <div className={styles.emailBox}>
              <Image src={emailIcon} alt="email icon" />
              <h4>Email</h4>
              <div>Our friendly team is here to help.</div>
              <p className={styles.link}>hi@ifixhere.com</p>
            </div>

            <div className={styles.locationBox}>
              <Image src={locationIcon} alt="location icon" />
              <h4>6 different states</h4>
              <div>Las Vegas, Chicago, New York, Seattle, California</div>
              <p className={styles.link}>See All Locations</p>
            </div>
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
                <label>You agree to our friendly privacy policy.</label>
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
