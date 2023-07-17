'use clent'

import en from "@/shared/lang/en";
import ja from "@/shared/lang/ja";
import { FC } from "react";
import styles from "./styles.css";
import Containar from "@/components/containar";
type Props={
  language:string;
}
const Skils:FC<Props> = ({language}) => {
  const la=language==='ja'?ja:en;
  return (
    <Containar
      title={ja.skills.title}
    >
      <>
      </>
    </Containar>
  );
}

export default Skils;
