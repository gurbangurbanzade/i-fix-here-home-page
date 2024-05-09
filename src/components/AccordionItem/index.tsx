"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
const AccordionItem = ({
  title,
  content,
  isActive,
  onClick,
}: {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  // console.log(styles.active);

  return (
    <div
      className={`${styles.accordionItem} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <div className={styles.accordionHeader}>
        <h4>{title}</h4>
        <div className={styles.accordionBtn}>
          {isActive ? <p>-</p> : <p>+</p>}
        </div>
      </div>
      {isActive && (
        <div className={styles.accordionContent}>{content}sdasdasdsd</div>
      )}
    </div>
  );
};
export default AccordionItem;
