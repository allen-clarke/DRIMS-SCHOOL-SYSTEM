import { Entrance, Registration, FeeStructure } from "./Sections";
import styles from "../Css/Informations.module.css";

const Informations = () => {
  const InfoMarkup = () => {
    return (
      <>
        <main>
          <p ClassName={styles["intro-paragraph"]}>
            This page contains all essential informations and updates about our
            noble institution. Informations that are here include financial and
            academic informations and other general informations.
          </p>
          <Entrance />
          <Registration />
          <FeeStructure />
        </main>
      </>
    );
  };
  return (
    <>
      <InfoMarkup />
    </>
  );
};
export default Informations;
