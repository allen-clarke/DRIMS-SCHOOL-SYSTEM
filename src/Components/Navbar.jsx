import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Css/Navbar.module.css";
import drimsBatch from "./Assets/Images/drimsBatch.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const links = [
    { to: "/", linkText: "Home" },
    { to: "/updates", linkText: "Updates" },
    { to: "/about", linkText: "About" },
    { to: "/gallery", linkText: "Gallery" }
  ];
  return (
    <header>
      <div className={styles["school-name"]}>
        <img src={drimsBatch} alt="DRIMS SCHOOL SYSTEM batch" />
        <p>Drims School System</p>
      </div>
      <nav className={styles["navigation-bar"]}>
        {links.map((element, index) => (
          <Link
            key={index}
            className={index === activeLink && styles["activeLink"]}
            onClick={() => setActiveLink(index)}
            to={element.to}
          >
            {element.linkText}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
