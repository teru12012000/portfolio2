'use client'
import Image from "next/image";
import { FC } from "react";
import styles from "./style.css";
type Props={
  url:string;
  title:string;
  detail:string;
}
const Card:FC<Props> = ({url,title,detail}) => {
  return (
    <div className={styles.containar}>
      <div className={styles.imgZone}>
        <Image
          src={url}
          width={200}
          height={200} 
          alt={title}        
        />
      </div>
      <h3 className={styles.titleText}>{title}</h3>
      <p>{detail}</p>
    </div>
  );
}

export default Card;