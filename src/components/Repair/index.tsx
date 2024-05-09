import React from "react";
import styles from "./style.module.scss";
import MainBtn from "../MainBtn";
import Image from "next/image";
import { repairElements } from "@/utils/constants";
import { v4 as uuuidv4 } from "uuid";

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
            {repairElements.map((element, i) => {
              if (i % 2 === 0) {
                return (
                  <div key={uuuidv4()} className={styles.card}>
                    <div className={styles.textBox}>
                      <h3>{element.title}</h3>
                      <p>{element.text}</p>
                      <MainBtn
                        title="Start a Repair"
                        btnStyle={"blueBtn"}
                        icon={null}
                      />
                    </div>
                    <div className={styles.imgBox}>
                      <Image
                        src={element.src}
                        alt="phone image"
                        width={608}
                        height={576}
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={uuuidv4()} className={styles.card}>
                    <div className={styles.imgBox}>
                      <Image
                        src={element.src}
                        alt="phone image"
                        width={608}
                        height={576}
                      />
                    </div>
                    <div className={styles.textBox}>
                      <h3>{element.title}</h3>
                      <p>{element.text}</p>
                      <MainBtn
                        title="Start a Repair"
                        btnStyle={"blueBtn"}
                        icon={null}
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repair;
