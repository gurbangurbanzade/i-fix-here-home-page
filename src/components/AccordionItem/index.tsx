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
}) => (
  <div
    className={`accordion-item ${isActive ? "active" : ""}`}
    onClick={onClick}
  >
    <div className="accordion-header">
      {title} {isActive ? "-" : "+"}
    </div>
    {isActive && <div className="accordion-content">{content}</div>}
  </div>
);
export default AccordionItem;
