import React from "react";
import styles from "./style.module.scss";
import MainBtn from "../MainBtn";
import Image from "next/image";
import { repairElements } from "@/utils/constants";
import { v4 as uuuidv4 } from "uuid";
import arrow from "@/assets/images/icons/diagonalArrowIcon.svg";
import whiteArrow from "@/assets/images/icons/whiteArrow.svg";

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
              return (
                <div
                  id={i % 2 == 0 ? styles.imgRight : styles.imgLeft}
                  key={uuuidv4()}
                  className={styles.card}
                >
                  <div className={styles.textBox}>
                    <div className={styles.textBoxHeader}>
                      <h3>{element.title}</h3>
                      <div>{element.text}</div>
                    </div>
                    <div className={styles.btnBox}>
                      <MainBtn
                        title="Start a Repair"
                        btnStyle={i == 0 ? "blueBtnArrow" : "blackBtn"}
                        icon={i == 0 ? whiteArrow : arrow}
                      />
                    </div>
                  </div>
                  <div className={styles.imgBox}>
                    <Image
                      src={element.src}
                      alt="phone image"
                      // width={608}
                      // height={576}
                      // layout="responsive"
                      objectFit="cover"
                      fill
                      // priority
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repair;
