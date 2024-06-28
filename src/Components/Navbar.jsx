import { Link } from "react-router-dom";
import styles from "./Css/Navbar.module.css";
import drimsBatch from "./Assets/Images/drimsBatch.png";

const Navbar = () => {
  return (
    <header>
      <div className={styles['school-name']}>
        <img src={drimsBatch} alt="DRIMS SCHOOL SYSTEM batch" />
        <p>Drims School System</p>
      </div>
      <nav className={styles["navigation-bar"]}>
        <Link to="/">Home</Link>
        <Link to="/informations">Informations</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
    </header>
  );
};

export default Navbar;
