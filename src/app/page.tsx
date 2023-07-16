'use client'
import Header from '@/components/Header'
import Aboutme from '@/components/Home/Aboutme';
import MyIcon from '@/components/Home/Myicon';
import Skils from '@/components/Home/Skill';
import { db } from '@/firebase/firebase';
import { pictureType } from '@/shared/Type';
import firebaseData from '@/shared/lang/data/firebaseData';
import { CollectionReference, DocumentData, collection, getDocs} from 'firebase/firestore';
import RootLayout from './layout';
const getURL=async()=>{
  const doc:CollectionReference<DocumentData>=collection(db,firebaseData.myFace.collectionName);
  const getPicture=await getDocs(doc);
    const url:pictureType[]=getPicture.docs.map(doc=>doc.data() as pictureType)
  return {
    faceURL:url[0]
  };
}

export default async function Home() {
  const url=getURL();
  return (
    <>
      <Aboutme
        myFaceUrl={url.then(url=>url.faceURL)}
      />
      <Skils
        language='ja'
      />
    </>
  )
}
