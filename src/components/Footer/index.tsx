import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { navElements } from "@/utils/constants";
import facebookLogo from "./../../assets/images/icons/facebookIcon.svg";
import twitterLogo from "./../../assets/images/icons/twittericon.svg";
import githubLogo from "./../../assets/images/icons/social.svg";
import linkedinLogo from "./../../assets/images/icons/linkedinIcon.svg";
const Footer = () => {
  return (
    <footer id={styles.footerContainer}>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.upFooter}>
            <div className={styles.leftSide}>
              <div>
                <Image
                  src="logoNavbar.svg"
                  alt="Logo"
                  width={135}
                  height={44}
                  priority
                />
              </div>
              <p>Everyone deserves a second chance, so do your phone!</p>
            </div>

            <div className={styles.rightSide}>
              <div className={styles.nav}>
                <ul>
                  {navElements.map((elem, i) => {
                    return i == 0 ? null : (
                      <li className={styles.navElem} key={uuidv4()}>
                        <Link href={elem.path}>{elem.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className={styles.socialMediaBox}>
                <Image src={twitterLogo} alt="social media icon" />
                <Image src={linkedinLogo} alt="social media icon" />
                <Image src={facebookLogo} alt="social media icon" />
                <Image src={githubLogo} alt="social media icon" />
              </div>
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
