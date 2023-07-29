'use client'
import Card from '@/components/Card';
import Containar from '@/components/containar';
import { pictureType } from '@/shared/Type';
import { FC } from 'react';
import styles from './style.css';
type Props={
  sectionTitle:string;
  skillLanguages:Promise<pictureType[]>;
}
const SkillDetails:FC<Props> = async({sectionTitle,skillLanguages}) => {
  return (
    <Containar
      title={sectionTitle}
    >
      <div className={styles.containar}>
          <div className={styles.cardZone}>
            {(await skillLanguages).map((item:pictureType,index:number)=>(
                <Card
                  key={index}
                  url={item.url}
                  title={item.title}
                  detail={item.detail as string}
                />
            ))}
          </div>
        </div>
    </Containar>
  );
}

export default SkillDetails;