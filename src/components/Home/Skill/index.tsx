'use clent'

import en from "@/shared/lang/en";
import ja from "@/shared/lang/ja";
import { FC } from "react";
import styles from "./styles.css";
import Containar from "@/components/containar";
import { pictureType } from "@/shared/Type";
import Card from "@/components/Card";
import Image from "next/image";
import ButtonOfMainPage from "@/components/ButtonOfMainPage";
type Props={
  skillKindURL:Promise<pictureType[]>;
  skillRepresentationURL:Promise<pictureType[]>;
}
const Skils:FC<Props> = async({skillKindURL,skillRepresentationURL}) => {
  return (
    <Containar
      title={ja.skills.title}
    >
      <>
        <div className={styles.containar}>
          <h3 className={styles.sectionTitle}>{ja.skills.subtitle1}</h3>
          <div className={styles.cardZone}>
            {(await skillKindURL).map((item:pictureType,index:number)=>(
                <Card
                  key={index}
                  url={item.url}
                  title={item.title}
                  detail={item.detail as string}
                />
            ))}
          </div>
          <h3 className={styles.sectionTitle}>{ja.skills.subtitle2}</h3>
          <div className={styles.imgZone}>
            {(await skillRepresentationURL).map((item:pictureType,index:number)=>(
                  <div  key={index} className={styles.imgBox}>
                    <Image 
                      src={item.url} 
                      alt={item.detail as string}                    
                      width={100}
                      height={100}                    
                    />
                  </div>
            ))}
          </div>
          <div className={styles.buttonZone}>
            <ButtonOfMainPage 
              linkUrl={ja.skills.link1} 
              linkTitle={ja.skills.buttonTitle1}            
            />
          </div>
        </div>
      </>
    </Containar>
  );
}

export default Skils;
