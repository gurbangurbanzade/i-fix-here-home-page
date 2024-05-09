"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { DEVICE_URL, deviceElements } from "@/utils/constants";
import { v4 as uuidv4 } from "uuid";

interface DeviceElement {
  id: number;
  src: string;
  title: string;
}

const Devices = () => {
  const [devices, setDevices] = useState<DeviceElement[]>([]);
  useEffect(() => {
    fetch("/api/devices", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setDevices(data);
      });
  }, []);
  return (
    <section>
      <div id={styles.devicesContainer} className="container">
        <div id={styles.devices}>
          {devices &&
            devices.map((elem) => {
              return (
                <div key={uuidv4()} className={styles.card}>
                  <div>
                    <Image
                      src={elem.src}
                      alt={elem.title + " icon"}
                      // objectFit="contain"
                      height={20}
                      width={20}
                    />
                  </div>
                  <p>{elem.title}</p>
                </div>
              );
            })}

          {/* {deviceElements.map((elem) => {
            return (
              <div key={uuidv4()} className={styles.card}>
                <div>
                  <Image
                    src={elem.src}
                    alt={elem.title + " icon"}
                    // objectFit="contain"
                    height={20}
                    width={20}
                  />
                </div>
                <p>{elem.title}</p>
              </div>
            );
          })} */}
        </div>
      </div>
    </section>
  );
};

export default Devices;
