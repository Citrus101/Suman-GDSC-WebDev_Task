import { ReactNode } from "react";
import styles from "./Card.module.css";


interface Prop {
  image: string;
  title: ReactNode;
  info: ReactNode;
}

export const Card = ({image, title , info}: Prop) => {
  return (
    <>
      <div className={styles.card}>
        <img src={image} alt="image related to the below event" />
        <div className={styles.cardBody}>
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{info}</p>
        </div>
      </div>
    </>
  );
};
