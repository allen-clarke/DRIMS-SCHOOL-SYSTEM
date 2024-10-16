import styles from "./Css/Footer.module.css";
import drimsBatch from "./Assets/Images/drimsBatch.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="d-flex flex-column">
      <div
        className={
          styles["brand-div"] +
          " d-flex flex-row align-items-center justify-content-center"
        }
      >
        <img src={drimsBatch} alt="DRIMS SCHOOL SYSTEM batch" className="rounded-circle" />
        <p className="text-white text-uppercase">DRIMS School System</p>
      </div>
      <ol className={styles["footer-list"] + " list-unstyled text-center"}>
        <li>
          <Link to="/updates">Updates</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ol>
      <ol className={styles["footer-list"] +" list-unstyled text-center"}>
        <li>
          <a href="mailto:drimsschool1993@gmail.com">Email</a>
          <a href="https://wa.me/+231770262147">WhatsApp</a>

          <a href="tel:+231776450925">Hotline</a>
        </li>
        <li>
          FairGround <span className={styles["vertical-rule"]}>|</span> Buchanan
          City <span className={styles["vertical-rule"]}>|</span> Grand Bassa
          County <span className={styles["vertical-rule"]}>|</span> Republic of
          Liberia
        </li>
      </ol>
    </footer>
  );
};

export default Footer;
