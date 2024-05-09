import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { deviceElements } from "@/utils/constants";
import { v4 as uuidv4 } from "uuid";

const Devices = () => {
  return (
    <section>
      <div id={styles.devicesContainer} className="container">
        <div id={styles.devices}>
          {deviceElements.map((elem) => {
            return (
              <div key={uuidv4()} className={styles.card}>
                <div>
                  <Image
                    src={elem.src}
                    alt={elem.title + " icon"}
                    objectFit="contain"
                    height={20}
                    width={20}
                  />
                </div>
                <p>{elem.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Devices;
