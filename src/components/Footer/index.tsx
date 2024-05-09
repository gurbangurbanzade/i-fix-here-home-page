import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { navElements } from "@/utils/constants";

const Footer = () => {
  return (
    <footer id={styles.footerContainer}>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.side}>
            <div>
              <Image
                src="logoNavbar.svg"
                alt="Logo"
                width={135}
                height={44}
                priority
              />
            </div>
            <div className={styles.nav}>
              <ul>
                {navElements.map((elem, i) => {
                  return (
                    <li className={styles.navElem} key={uuidv4()}>
                      <Link href={elem.path}>{elem.title}</Link>
                    </li>
                  );
                })}
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
