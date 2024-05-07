"use client";
import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";
import MainBtn from "@/components/MainBtn";
import { v4 as uuidv4 } from "uuid";
import phoneIcon from "@/assets/images/icons/phoneIcon.svg";
import { navElements } from "@/utils/constants";
import arrowBottom from "@/assets/images/icons/bottomArrowIcon.svg";
import menuIcon from "@/assets/images/icons/burgerMunuIcon.svg";

const Navbar = () => {
  return (
    <div id={styles.header}>
      <div id={styles.navbar} className="container">
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
                  {elem.dropDown ? (
                    <Image
                      src={arrowBottom}
                      alt="menu icon"
                      height={5}
                      width={10}
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.btnBox}>
          <MainBtn title="Start a Repair" btnStyle="blueBtn" icon={null} />
          <MainBtn
            title="+1 (877) 966 4349"
            btnStyle="whiteBtn"
            icon={phoneIcon}
          />
        </div>
        <div className={styles.burgerMenu}>
          <Image src={menuIcon} alt="menu icon" height={12} width={18} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
