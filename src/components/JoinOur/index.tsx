import React from "react";
import styles from "./style.module.scss";

const JoinOur = () => {
  return (
    <div id={styles.upfooter}>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.left}>
            <p>Join our newsletter</p>
            <span>We’ll send you a nice letter once per week. No spam.</span>
          </div>

          <div className={styles.right}>
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOur;
