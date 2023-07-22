'use clent'

import en from "@/shared/lang/en";
import ja from "@/shared/lang/ja";
import { FC } from "react";
import styles from "./styles.css";
import Containar from "@/components/containar";
import { pictureType } from "@/shared/Type";
import Card from "@/components/Card";
type Props={
  skillKindURL:Promise<pictureType[]>;
}
const Skils:FC<Props> = async({skillKindURL}) => {
  return (
    <Containar
      title={ja.skills.title}
    >
      <>
        <div className={styles.containar}>
          <h3 className={styles.sectionTitle}>{ja.skills.subtitle1}</h3>
          <div className={styles.cardZone}>
            {(await skillKindURL).map((item:pictureType,index:number)=>(
              <div key={index}>
                <Card
                  url={item.url}
                  title={item.title}
                  detail={item.detail as string}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    </Containar>
  );
}

export default Skils;
