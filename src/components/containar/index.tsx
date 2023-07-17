import { FC, ReactNode } from "react";
import styles from "./style.css";
type Props={
  title:string;
  children:ReactNode;
}
const Containar:FC<Props> = ({title,children}) => {
  return (
    <div className={styles.containar}>
      <h2 className={styles.titlebox}>
        <span className={styles.titleSpan}>{title}</span>
      </h2>
      <div className={styles.detaialBox}>
        {children}
      </div>
    </div>
  );
}

export default Containar;