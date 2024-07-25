import { useEffect, useRef } from "react";
import styles from "./Css/SlidesMarkup.module.css";
import dad from "./Assets/Images/dad.jpg";
import clarke from "./Assets/Images/clarke.jpg";
import drimsBatch from "./Assets/Images/drimsBatch.png";

function Slides() {
  const slideArray = [
    {
      speaker: "Rev. David Kekulah, Sr.",
      speakerImage: dad,
      remark: `We are pleased to welcome you to the e-portal of DRIMS SCHOOL SYSTEM, an institution committed to providing high-quality secondary educations that brighten the futures of our youngsters.`
    },
    {
      speaker: "Anthony G. Clarke, Sr.",
      speakerImage: clarke,
      remark: `At DRIMS, we instill morals in our students so that they will be useful for the larger society.
            Remember, the Bible says train up a child in a way that when he is old, he should not depart from it.`
    },
    {
      speaker: "Allen G. Clarke",
      speakerImage: drimsBatch,
      remark: `We highly encourage academic excellence at this noble institution.
            We setup academic activities that enhance the brilliance of our students.`
    }
  ];
  let slideIndex = useRef(0);
  useEffect(() => {
    const slideShow = () => {
      let slidesClassName = styles.mySlides;
      let slides = document.querySelectorAll(`.${slidesClassName}`);
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex.current++;
      if (slideIndex.current > slides.length) {
        slideIndex.current = 1;
      }
      slides[slideIndex.current - 1].style.display = "flex";

      setTimeout(slideShow, 5000);
    };
    slideShow();
    return () => {
      clearTimeout(slideShow);
    };
  }, [slideIndex]);

  const SlidesMarkup = ({ speaker, speakerImage, remark }) => {
    return (
      <figure
        className={
          styles.mySlides +
          " flex-column align-items-center align-content-center justify-content-space-evenly bg-white position-relative"
        }
      >
        <div
          className={
            styles["speaker-image-div"] +
            " rounded-circle position-absolute top-0 translate-middle-y"
          }
        >
          <img
            src={speakerImage}
            alt={speaker}
            className="rounded-circle h-100 w-100 object-fit-cover"
          />
        </div>
        <p className={styles.remark + " text-center"}>{remark}</p>
        <hr />
        <p className={styles.speaker + " text-center"}>~{speaker}</p>
      </figure>
    );
  };

  return (
    <>
      <main
        className={
          styles["main"] + " d-flex align-items-center justify-content-center"
        }
      >
        {slideArray.map((value, index) => {
          return (
            <SlidesMarkup
              key={index}
              speaker={value.speaker}
              speakerImage={value.speakerImage}
              remark={value.remark}
            />
          );
        })}
      </main>
    </>
  );
}

export default Slides;
