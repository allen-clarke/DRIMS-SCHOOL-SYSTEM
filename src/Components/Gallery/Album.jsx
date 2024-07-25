import { useEffect, useState } from "react";
import styles from "../Css/Gallery.module.css";

const Album = ({
  array,
  containers,
  id,
  className,
  h2,
  displayPreviousImage,
  displayNextImage
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    containers[index].style.display = "block";
  }, [index, containers]);

  return (
    <>
      <section className={styles["gallery"]+" position-relative"} id={id}>
        <h2>{h2}</h2>
        <button
          className={styles["previous"] + " text-black position-absolute z-1 border border-0 bg-transparent"}
          onClick={() => {
            displayPreviousImage(containers, index, setIndex);
          }}
        >
          {"<"}
        </button>
        <button
          className={styles["next"] + " text-black position-absolute z-1 border border-0 bg-transparent"}
          onClick={() => {
            displayNextImage(containers, index, setIndex);
          }}
        >
          {">"}
        </button>
        {array.images.map((element, index) => {
          return (
            <div
              className={styles["image-container"] + " position-relative " + className}
              iden={element.iden}
            >
              <a href={element.href}>
                <img
                  src={element.source}
                  alt={element.description}
                  className={styles["gallery-img"] + " w-100 h-100 object-fit-cover"}
                />
              </a>
              <p className={styles["image-index"] + " text-black position-absolute"}>
                {element.imageIndex}
              </p>
              <p
                className={
                  styles["image-description"] +
                  " text-center text-black bg-white overflow-hidden"
                }
              >
                {element.description}
              </p>
            </div>
          );
        })}

        {array.lightboxes.map((element, index) => {
          return (
            <div
              className={styles["lightbox"] + " d-flex flex-column w-100 h-100 position-fixed top-0 start-0 z-n1 opacity-0"}
              id={element.iden}
            >
              <a
                className={styles["close"] + " text-white text-decoration-none position-absolute z-3"}
                href={element.href}
              >
                Close
              </a>
              <div className={styles["lightbox-content"]}>
                <img
                  src={element.source}
                  alt={element.source}
                  className="w-100 h-auto"
                />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Album;
