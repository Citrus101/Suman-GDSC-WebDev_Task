import styles from "./NavBar.module.css";
import logo from "./Images/GDSC_logo.png";

export default function NavBar() {
  return (
    <>
      <div className={styles.NavBar}>
        <img src={logo} alt="GDSC Logo" />
        <ul className={styles.listGroup}>
          <li className={styles["hover-underline-animation"]}>
            <a href="https://gdsc-djsce.netlify.app/">Home</a>
          </li>
          <li className={styles["hover-underline-animation"]}>
            <a href="">Event</a>
          </li>
          <li className={styles["hover-underline-animation"]}>
            <a href="https://gdsc-djsce.netlify.app/team">Team</a>
          </li>
          <li className={styles["hover-underline-animation"]}>
            <a href="https://gdsc-djsce.netlify.app/contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
