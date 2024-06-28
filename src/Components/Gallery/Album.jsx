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
      <section className={styles.gallery} id={id}>
        <h2>{h2}</h2>
        <button
          className={styles.previous}
          onClick={() => {
            displayPreviousImage(containers, index, setIndex);
          }}
        >
          {"<"}
        </button>
        <button
          className={styles.next}
          onClick={() => {
            displayNextImage(containers, index, setIndex);
          }}
        >
          {">"}
        </button>
        {array.images.map((element, index) => {
          return (
            <div
              className={styles.imageContainer + " " + className}
              iden={element.iden}
            >
              <a href={element.href}>
                <img
                  src={element.source}
                  alt={element.description}
                  className={styles.galleryImg}
                />
              </a>
              <p className={styles.imageIndex}>{element.imageIndex}</p>
              <p className={styles.imageDescription}>{element.description}</p>
            </div>
          );
        })}

        {array.lightboxes.map((element, index) => {
          return (
            <div className={styles.lightbox} id={element.iden}>
              <a className="close" href={element.href}>
                Close
              </a>
              <div className="lightbox-content">
                <img src={element.source} alt={element.source} />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Album;
