"use client";
import React, { useRef } from "react";
import styles from "./style.module.scss";
import arrowLeft from "@/assets/images/icons/arrowLeft.svg";
import arrowRight from "@/assets/images/icons/arrowRight.svg";
import Image from "next/image";
import { v4 as uuuidv4 } from "uuid";
import { blogs } from "@/utils/constants";
import starIcon from "@/assets/images/icons/starIcon.svg";
const Blogs = () => {
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
      <div id={styles.blogsContainer} className="container">
        <div id={styles.blogs}>
          <div className={styles.header}>
            <div className={styles.leftSide}>
              <h2>Blogs</h2>
              <p>Everything about electronic devices.</p>
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
                {blogs.map((blog) => {
                  return (
                    <div key={uuuidv4()} className={styles.card}>
                      <div className={styles.imgBox}>
                        <Image
                          src={blog.src}
                          alt={blog.title}
                          width={384}
                          height={240}
                        />
                      </div>

                      <div className={styles.cardContext}>
                        <div className={styles.header}>
                          <div className={styles.categoryBox}>
                            <div className={styles.category}>
                              {blog.category}
                            </div>
                            <div className={styles.time}> {blog.readTime}</div>
                          </div>
                          <h3>{blog.title}</h3>
                          <p>{blog.text}</p>
                        </div>
                        <div className={styles.date}>{blog.postDate} </div>
                      </div>
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

export default Blogs;
