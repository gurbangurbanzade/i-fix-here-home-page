"use client";
import React, { useRef } from "react";
import styles from "./style.module.scss";
import arrowLeft from "@/assets/images/icons/arrowLeft.svg";
import arrowRight from "@/assets/images/icons/arrowRight.svg";
import Image from "next/image";
import { v4 as uuuidv4 } from "uuid";
import { customers } from "@/utils/constants";
import starIcon from "@/assets/images/icons/starIcon.svg";
const Feedback = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSlide = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const cards = sliderRef.current;
      let cardWidth = cards.firstElementChild?.clientWidth || 0;
      const offset = direction === "left" ? -cardWidth : cardWidth;
      const currentTransform = cards.style.transform
        ? parseInt(
            cards.style.transform.replace("translateX(", "").replace("px)", "")
          )
        : 0;
      const newTransform = currentTransform + offset;

      const minTransform = -cards.scrollWidth + cardWidth;
      const maxTransform = 0;
      if (newTransform >= minTransform && newTransform <= maxTransform) {
        cards.style.transition = "transform 0.5s ease-in-out";
        cards.style.transform = `translateX(${newTransform}px)`;
      }
    }
  };

  return (
    <section>
      <div id={styles.feedbackContainer} className="container">
        <div id={styles.feedback}>
          <div className={styles.header}>
            <div className={styles.leftSide}>
              <h2>Don’t just take our word for it</h2>
              <p>
                Hear from some of our amazing customers who are building faster.
              </p>
            </div>
            <div className={styles.btnBox}>
              <button
                className={styles.left}
                onClick={() => handleSlide("left")}
              >
                <Image src={arrowLeft} alt="arrow left" />
              </button>
              <button
                className={styles.right}
                onClick={() => handleSlide("right")}
              >
                <Image src={arrowRight} alt="arrow right" />
              </button>
            </div>
          </div>
          <div>
            <div className={styles.cardSlider}>
              <div className={styles.cards} ref={sliderRef}>
                {customers.map((customer) => {
                  return (
                    <div key={uuuidv4()} className={styles.card}>
                      <Image
                        src={customer.img}
                        alt={customer.name}
                        width={92}
                        height={92}
                      />

                      <h5>
                        {customer.name} {customer.surname}
                      </h5>
                      <p>{customer.position}</p>
                      <div className={styles.starBox}>
                        {[1, 2, 3, 4, 5].map((star) => {
                          if (star <= customer.starCount) {
                            return (
                              <Image
                                key={uuuidv4()}
                                src={starIcon}
                                alt="star icon"
                              />
                            );
                          }
                        })}
                      </div>
                      <h6>{customer.feedback}</h6>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
