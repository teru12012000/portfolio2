'use client'

import en from "@/shared/lang/en";
import ja from "@/shared/lang/ja";
import { FC } from "react";
import headerStyles from "./style.css";

type Props={
  language:string;
}
const Header:FC<Props> = ({language}) => {
  const la=language==='ja'?ja:en;
  return (
    <header className={headerStyles.containar}>
      <h1 className={headerStyles.headerText}>
        {la.header.title}
      </h1>
    </header>
  );
}

export default Header;