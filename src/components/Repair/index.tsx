import React from "react";
import styles from "./style.module.scss";
import MainBtn from "../MainBtn";
import Image from "next/image";

const Repair = () => {
  return (
    <section>
      <div className="container">
        <div id={styles.repair}>
          <h2>Repair with Us</h2>
          <p>
            With us, you can have all your electronic devices repaired quickly
            and safely.
          </p>

          <div className={styles.cardBox}>
            <div className={styles.card}>
              <div className={styles.textBox}>
                <h3>Phones</h3>
                <p>
                  At “iFixHere”, we specialize in providing fast, reliable, and
                  affordable smartphone repairs. Whether you own an Apple,
                  Samsung, or any other phone brand, our experts are here to
                  bring your device back to life. With years of experience and a
                  commitment to quality, we understand your phone's unique needs
                  and deliver top-notch solutions. Trust us for a seamless
                  repair experience and get your smartphone working like new
                  again.
                </p>
                <MainBtn title="Start a Repair" />
              </div>
              <div className={styles.imgBox}>
                <Image
                  src={"/images/repair/phones.svg"}
                  alt="phone image"
                  width={608}
                  height={576}
                />
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.textBox}>
                <h3>Phones</h3>
                <p>
                  At “iFixHere”, we specialize in providing fast, reliable, and
                  affordable smartphone repairs. Whether you own an Apple,
                  Samsung, or any other phone brand, our experts are here to
                  bring your device back to life. With years of experience and a
                  commitment to quality, we understand your phone's unique needs
                  and deliver top-notch solutions. Trust us for a seamless
                  repair experience and get your smartphone working like new
                  again.
                </p>
                <MainBtn btnStyle={"blueBtnlarge"} title="Start a Repair" />
              </div>
              <div className={styles.imgBox}>
                <Image
                  src={"/images/repair/phones.svg"}
                  alt="phone image"
                  width={608}
                  height={576}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repair;
