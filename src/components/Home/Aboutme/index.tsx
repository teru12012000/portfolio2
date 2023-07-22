'use client'
import { pictureType } from "@/shared/Type";
import { FC } from "react";
import Image from "next/image";
import styles from "./style.css";
import ja from "@/shared/lang/ja";
import Containar from "@/components/containar";
type Props={
  myFaceUrl:Promise<pictureType>;
}
const Aboutme:FC<Props> = async({myFaceUrl}) => {
  return (
    <Containar
      title={ja.aboutMe.title}
    >
      <>
        <Image
          src={(await myFaceUrl).url} 
          alt={(await myFaceUrl).title}
          width={200}
          height={200}
          className={styles.imageBox}
        />
        <div className={styles.textBox}>
          <p className={styles.text}>{ja.aboutMe.profile}</p>
        </div>
      </>
    </Containar>
  );
}

export default Aboutme;