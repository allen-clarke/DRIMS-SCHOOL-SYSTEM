import styles from "../Css/Gallery.module.css"; 
const AlbumList = () => {
  const list = [
    {
      name: "Administration",
      href: "#administration"
    },
    {
      name: "Graduations",
      href: "#graduations"
    },
    {
      name: "Academics",
      href: "#academics"
    },
    {
      name: "Sports",
      href: "#sports"
    },
    {
      name: "Trophy Case",
      href: "#trophy-case"
    }
  ];
  return (
    <>
      <ul className={styles["albums-list"]}>
        {list.map((element, index) => {
          return (
            <li>
              <a href={element.href}>{element.name}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AlbumList;
