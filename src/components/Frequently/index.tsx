import React from "react";
import styles from "./style.module.scss";
import Accordion from "../Accordion";

const Frequently = () => {
  return (
    <section>
      <div className="container">
        <div id={styles.frequently}>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about iFixHere</p>
        </div>
        <Accordion />
      </div>
    </section>
  );
};

export default Frequently;
