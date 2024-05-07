import React from "react";
import styles from "./style.module.scss";
import MainBtn from "../MainBtn";
import toolIcon from "@/assets/images/icons/tooIcon.svg";
import Image from "next/image";
import contentImage from "@/assets/images/images/home/Content.svg";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div id={styles.hero}>
          <div className={styles.textBox}>
            <h1>
              Instant and
              <br />
              Reliable Electronics
              <br />
              Repair Near You!
            </h1>
            <MainBtn
              title="Start a Repair"
              btnStyle="blueBtnLarge"
              icon={toolIcon}
            />
          </div>
          <div className={styles.imageBox}>
            <Image
              width={576}
              height={628}
              src={contentImage}
              alt="telephone repair image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
