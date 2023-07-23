'use client'
import Aboutme from '@/components/Home/Aboutme';
import Skils from '@/components/Home/Skill';
import firebaseData from '@/firebase/firebaseData';
import { getURL } from '@/shared/functions';


export default async function Home() {
  const faceUrl=getURL(firebaseData.myFace.collectionName);
  const skillKindURL=getURL(firebaseData.skillKind.collectionName1);
  const skillLanguageURL=getURL(firebaseData.skillKind.collectionName2);
  return (
    <>
      <Aboutme
        myFaceUrl={faceUrl.then(doc=>doc.URL[0])}
      />
      <Skils
        skillKindURL={skillKindURL.then(doc=>doc.URL)}
        skillRepresentationURL={skillLanguageURL.then(doc=>doc.URL)}
      />
    </>
  )
}
