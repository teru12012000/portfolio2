'use client'

import BackButton from "@/components/BackButton";
import firebaseData from "@/firebase/firebaseData";
import { getURL } from "@/shared/functions";
import ja from "@/shared/lang/ja";
import SkillDetails from "./SkillDetail";

const LangagesAndTools = async() => {
  const getWebUrl=getURL(firebaseData.skillKind.collectionName3)
  return (
    <div>
      <BackButton
        linkTitle={ja.skills.LanguageAndTools.linkTitle}
      />
      <SkillDetails
        sectionTitle={ja.skills.LanguageAndTools.websectionTitle}
        skillLanguages={getWebUrl.then(doc=>doc.URL)}
      />
    </div>
  );
}

export default LangagesAndTools;