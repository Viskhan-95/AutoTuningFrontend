import React from "react";
import styles from "./footer.module.css";
import logo from "../../../icon/iconAutoTuning.png";
import facebook from "../../../icon/facebook.png";
import instagram from "../../../icon/instagram.png";
import whatsapp from "../../../icon/whatsapp.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.content}>
        <div className={styles.mainInfo}>
          <div className={styles.logoCnt}>
            <div className={styles.logoText}>
              BROOKLYN<br></br>AUTOMOBILE<br></br>STUDIO
            </div>
          </div>
          <div className={styles.rightFlang}>
            <h2>Наши контакты:</h2>
            <div className={styles.phone}>+7 505 420-14-88</div>
            <div className={styles.adress}>Грозный ул. Трошева 7</div>
            <div>
              <Link to="/contacts" className={styles.map}>
                {" "}
                Показать на карте{" "}
              </Link>{" "}
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.links}>
          <a href="https://www.facebook.com/">
            <img className={styles.icon} alt="" src={facebook} />
          </a>
          <a href="https://www.instagram.com/">
            <img className={styles.icon} alt="" src={instagram} />
          </a>
          <a href="https://www.whatsapp.com/">
            <img className={styles.icon} alt="" src={whatsapp} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
