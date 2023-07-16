'use client'
import { pictureType } from "@/shared/Type";
import { FC } from "react";
import Image from "next/image";
import styles from "./style.css";
import ja from "@/shared/lang/ja";
type Props={
  myFaceUrl:Promise<pictureType>;
}
const Aboutme:FC<Props> = async({myFaceUrl}) => {
  return (
    <div className={styles.containar}>
        <h2 className={styles.titlebox}>
          <span className={styles.titleSpan}>{ja.aboutMe.title}</span>
        </h2>
      <div className={styles.detaialBox}>
        <Image
          src={(await myFaceUrl).url} 
          alt={(await myFaceUrl).detail}
          width={200}
          height={200}
          className={styles.imageBox}
        />
        <div className={styles.textBox}>
          <p className={styles.text}>{ja.aboutMe.profile}</p>
        </div>
      </div>
      
    </div>
  );
}

export default Aboutme;