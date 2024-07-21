import AlbumList from "./AlbumList";
import {
  academicGallery,
  administrationGallery,
  sportsGallery
} from "./AlbumArrays";
import Album from "./Album";
import styles from "../Css/Gallery.module.css";

const Gallery = () => {
  function DisplayImage() {
    //n refers to the index of the current image container. setN is the function that increments the index of the current container.
    DisplayImage.prototype.next = function (imageContainer, n, setN) {
      imageContainer[n].style.display = "none";
      n >= imageContainer.length - 1 ? setN(0) : setN(n + 1);
    };
    DisplayImage.prototype.previous = function (imageContainer, n, setN) {
      imageContainer[n].style.display = "none";
      n <= 0 ? setN(imageContainer.length - 1) : setN(n - 1);
    };
  }
  const displayImage = new DisplayImage();

  return (
    <>
      <main className={styles["main"]}>
        <h1>Tour our Gallery</h1>
        <h2 style={{ marginLeft: "25px" }}>Albums</h2>

        <AlbumList />

        <div className={styles["gallery-div"]}>
          <Album
            array={administrationGallery}
            id="administration"
            className="administration-image-container"
            h2="Administration"
            containers={document.getElementsByClassName(
              "administration-image-container"
            )}
            displayPreviousImage={displayImage.previous}
            displayNextImage={displayImage.next}
          />

          <Album
            array={academicGallery}
            id="academics"
            className="academic-image-container"
            h2="Academics"
            containers={document.getElementsByClassName(
              "academic-image-container"
            )}
            displayPreviousImage={displayImage.previous}
            displayNextImage={displayImage.next}
          />

          <Album
            array={sportsGallery}
            id="sports"
            className="sports-image-container"
            h2="Sports"
            containers={document.getElementsByClassName(
              "sports-image-container"
            )}
            displayPreviousImage={displayImage.previous}
            displayNextImage={displayImage.next}
          />
        </div>
      </main>
    </>
  );
};

export default Gallery;
