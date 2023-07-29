'use client'

import { IconButton } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import styles from "./style.css";
type Props={
  linkTitle:string;
}
const BackButton:FC<Props> = ({linkTitle}) => {
  return (
    <div className={styles.containar}>
      <Link
        href={linkTitle}
      >
        <IconButton aria-label="back" size="large">
          <KeyboardBackspaceIcon fontSize="inherit" />
        </IconButton>
      </Link>
    </div>
  );
}

export default BackButton;