import React from "react";
import styles from "./style.module.scss";
import warrantyIcon from "./../../assets/images/icons/warrantyIcon.svg";
import technicIcon from "./../../assets/images/icons/technicIcon.svg";
import Image from "next/image";

const WhyiFixHere = () => {
  return (
    <section>
      <div className="container">
        <div id={styles.whyiFix}>
          <h2>Why iFixHere?</h2>
          <p className={styles.text}>
            Our unwavering commitment to tech excellence ensures flawless
            repairs. Opt for iFixHere – where Speed, Reliability, and
            Affordability Meet!
          </p>

          <div className={styles.infoBox}>
            <div className={styles.infoCard}>
              <div>30 Min</div>
              <h4>Quick Repair</h4>
              <p className={styles.text}>
                Our Speedy Repair Guarantee! Well have your device back in
                action in under 30 minutes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <div>
                <Image
                  src={warrantyIcon}
                  alt="warranty icon"
                  width={72}
                  height={72}
                />
              </div>
              <h4>Warranty for Repair</h4>
              <p className={styles.text}>
                Ensuring flawless device performance, we stand confidently
                behind our work.
              </p>
            </div>
            <div className={styles.infoCard}>
              <div>11 Years</div>
              <h4>Years of Experience</h4>
              <p className={styles.text}>
                With over 11 years of industry experience, our proven expertise
                guarantees exceptional tech repairs and unmatched service
                quality!
              </p>
            </div>
            <div className={styles.infoCard}>
              <div>
                <Image
                  src={technicIcon}
                  alt="texhnic icon"
                  height={72}
                  width={72}
                />
              </div>
              <h4>Professional Technicians</h4>
              <p className={styles.text}>
                Our Professional Technicians: Your devices in safe hands! We
                resolve issues with expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyiFixHere;
