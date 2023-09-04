import event from "./Images/UpComing.png";
import styles from "./UpComing.module.css";

export const UpComing = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.title}><span>Upcoming</span> Event</div>
        <img className={styles.image} src={event} alt="Upcoming Event" />
      </div>
    </>
  );
};
