"use client";
import React, { useRef } from "react";
// import styles from "./style.module.scss";
import "./style.scss";
const Feedback = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSlide = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const cards = sliderRef.current;
      const cardWidth = cards.firstElementChild?.clientWidth || 0;
      const offset = direction === "left" ? -cardWidth : cardWidth;
      cards.style.transform = `translateX(${offset}px)`;
    }
  };

  return (
    <div className="card-slider">
      <div className="cards" ref={sliderRef}>
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
        <div className="card">Card 4</div>
        <div className="card">Card 5</div>
      </div>
      <button className="slider-btn left" onClick={() => handleSlide("left")}>
        {"<"}
      </button>
      <button className="slider-btn right" onClick={() => handleSlide("right")}>
        {">"}
      </button>
    </div>
  );
};

export default Feedback;
