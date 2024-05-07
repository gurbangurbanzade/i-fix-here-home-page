"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import AccordionItem from "./../AccordionItem";
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const accordionItems = [
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
    { title: "Section 3", content: "Content for section 3" },
    { title: "Section 4", content: "Content for section 4" },
    { title: "Section 5", content: "Content for section 5" },
    { title: "Section 6", content: "Content for section 6" },
  ];

  return (
    <div className={styles.accordion}>
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
