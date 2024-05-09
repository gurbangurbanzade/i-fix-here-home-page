import React from "react";
import styles from "./style.module.scss";
import Accordion from "../Accordion";
import MainBtn from "../MainBtn";

const Frequently = () => {
  return (
    <section>
      <div className="container">
        <div id={styles.frequently}>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about iFixHere</p>
          <Accordion />
          <div className={styles.footer}>
            <div className={styles.footerLeft}>
              <h5>Still have questions?</h5>
              <p>
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
            </div>
            <div className={styles.footerRight}>
              <MainBtn title="Get in touch" btnStyle={"blueBtn"} icon={null} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frequently;
