import { db } from "@/firebase/firebase";
import firebaseData from "@/firebase/firebaseData";
import { CollectionReference, DocumentData, collection, getDocs } from "firebase/firestore";
import { pictureType } from "./Type";

export const getURL=async(collectionName:string)=>{
  const doc:CollectionReference<DocumentData>=collection(db,collectionName);
  const getPicture=await getDocs(doc);
  const url:pictureType[]=getPicture.docs.map(doc=>doc.data() as pictureType)
  return {
    URL:url
  };
}