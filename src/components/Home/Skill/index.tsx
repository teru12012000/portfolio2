'use clent'

import en from "@/shared/lang/en";
import ja from "@/shared/lang/ja";
import { FC } from "react";
type Props={
  language:string;
}
const Skils:FC<Props> = ({language}) => {
  const la=language==='ja'?ja:en;
  return (
    <div>
      Enter
    </div>
  );
}

export default Skils;
