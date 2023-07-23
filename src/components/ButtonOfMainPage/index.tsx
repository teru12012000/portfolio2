'use client'

import Link from "next/link";
import { FC } from "react";
import styles from "./style.css";

type Props={
  linkUrl:string;
  linkTitle:string;
}
const ButtonOfMainPage:FC<Props> = ({linkUrl,linkTitle}) => {
  return (
    <>
      <Link href={linkUrl} className={styles.link}>
        <button className={styles.button}>
          {linkTitle}
        </button>
      </Link>
    </>
  );
}

export default ButtonOfMainPage;