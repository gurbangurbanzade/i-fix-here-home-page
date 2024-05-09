import React from "react";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.side}>
            <div className={styles.leftSide}>
              <div className={styles.logoHere}>
                <h1>İFİx Here</h1>
              </div>
              <span>Everyone deserves a second chance, so do your phone!</span>
            </div>

            <div className={styles.rightSide}>
              <ul className={styles.ulOne}>
                <li>Repairs</li>
                <li>Locations</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Blogs</li>
                <li className={styles.non}>Careers</li>
              </ul>
              <ul className={styles.ulTwo}>
                <li>Twtr</li>
                <li>Lnkd</li>
                <li>Fcbk</li>
                <li>Gith</li>
              </ul>
            </div>
          </div>

          <div className={styles.copyRight}>
            <p>© 2077 Untitled UI. All rights reserved.</p>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
