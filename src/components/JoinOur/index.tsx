import React from "react";
import styles from "./style.module.scss";
import MainBtn from "@/components/MainBtn";
const JoinOur = () => {
  return (
    <section id={styles.joinOurContainer}>
      <div className="container">
        <div id={styles.joinOur}>
          <div>
            <div className={styles.leftSide}>
              <h3>Join our newsletter</h3>
              <span>We’ll send you a nice letter once per week. No spam.</span>
            </div>

            <div className={styles.rightSide}>
              <input type="text" placeholder="Enter your email" />
              <MainBtn title={"Subscribe"} icon={null} btnStyle={"blueBtn"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOur;
